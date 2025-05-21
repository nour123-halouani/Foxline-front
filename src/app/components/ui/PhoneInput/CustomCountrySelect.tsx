"use client"
import { getCountries } from 'react-phone-number-input/input';
import Select from 'react-select';
import { Dropdown } from '../../icons/Dropdown';
import { components, DropdownIndicatorProps } from 'react-select';
import { useEffect, useState } from 'react';
import cn from '@/app/utils/classNames';

const CustomDropdownIndicator = (props: DropdownIndicatorProps) => (
    <components.DropdownIndicator {...props}>
        <Dropdown className="w-5 h-5 text-gold-lighter hover:text-gold" />
    </components.DropdownIndicator>
);

const getFlagUrl = (countryCode: string) =>
    `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;

type Props = {
    value?: string;
    onChange: (value?: string) => void;
    labels: Record<string, string>;
    allowedCountries?: string[];
    lang: string;
};

export default function CustomCountrySelect({ value, onChange, labels, allowedCountries, lang }: Props) {
    const countries = allowedCountries ?? getCountries();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const options = countries.map((country) => ({
        value: country,
        label: (
            <div className="flex items-center gap-2">
                <img src={getFlagUrl(country)} alt={country} className="w-5 h-3" />
                <span>{labels[country]}</span>
            </div>
        ),
        flagOnly: (
            <img src={getFlagUrl(country)} alt={country}
                className={cn("w-6 h-4 object-contain",
                    lang === "ar" && menuIsOpen && "absolute top-[4px] z-[9999] right-[89px]"
                )} />
        ),
    }));

    const defaultOption = options.find((opt) => opt.value === 'LY');
    const selectedOption =
        options.find((opt) => opt.value === value) || defaultOption;

    useEffect(() => {
        if (!value && defaultOption) {
            onChange(defaultOption.value);
        }
    }, [value, defaultOption, onChange]);

    return (
        <Select
            instanceId="phone-country-select"
            options={options}
            onChange={(option) => onChange(option?.value || defaultOption?.value)}
            value={selectedOption || defaultOption}
            classNamePrefix="react-select"
            isSearchable={false}
            isClearable={false}
            menuPlacement="auto"
            menuPosition="absolute"
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            menuShouldScrollIntoView={false}
            components={{
                DropdownIndicator: CustomDropdownIndicator as any,
                SingleValue: ({ data }) => <div>{data.flagOnly}</div>,
                IndicatorSeparator: () => null,
            }}
            styles={{
                option: (styles, { isFocused, isSelected }) => ({
                    ...styles,
                    backgroundColor: isSelected
                        ? '#E1D2A7'
                        : isFocused
                            ? '#E1D2A7'
                            : undefined,
                    ":hover": {
                        backgroundColor: "#E1D2A7",
                    },
                    color: 'black',
                }),
                control: (base) => ({
                    ...base,
                    height: '32px',
                    width: '48px',
                    minHeight: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    border: 'none',
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                }),
                valueContainer: (base) => ({
                    ...base,
                    padding: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }),
                dropdownIndicator: (base) => ({
                    ...base,
                    padding: 0,
                }),
                menu: (base) => ({
                    ...base,
                    zIndex: 9999,
                    width: "300%",
                }),
            }}
        />
    );
}