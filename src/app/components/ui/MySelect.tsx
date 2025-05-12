"use client"
import { Select } from "rizzui";
import { Dropdown } from "../icons/Dropdown";

const MySelect = (props: any) => {
    return (
        <Select
            suffix={<Dropdown className="w-6 h-6 text-gold-lighter" />}
            optionClassName="hover:bg-gold-lighter"
            dropdownClassName="bg-bg-lighter"
            selectClassName="text-[#a3a7b0]"
            {...props}
        />
    );
};

export default MySelect;
