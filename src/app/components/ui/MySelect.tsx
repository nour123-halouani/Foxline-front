"use client"
import { Select } from "rizzui";
import { Dropdown } from "../icons/Dropdown";

const MySelect = (props: any) => {
    return (
        <Select
            suffix={<Dropdown className="w-6 h-6 text-gold-lighter" />}
            optionClassName={props.optionClassName ?? "hover:bg-gold-lighter"}
            dropdownClassName={props.dropdownClassName ?? "bg-bg-lighter"}
            selectClassName={props.selectClassName ?? "text-[#a3a7b0]"}
            {...props}
        />
    );
};

export default MySelect;
