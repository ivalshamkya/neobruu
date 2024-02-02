'use client'
import Dropdown from "@/components/neobruu/Dropdown";

export default function DropdownExample() {
    return (
        <div className="flex gap-3">
            <Dropdown label="Dropdown" rounded="none" variant="primary">
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Sign Out</Dropdown.Item>
            </Dropdown>
        </div>
    )
}