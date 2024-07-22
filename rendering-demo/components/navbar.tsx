"use client";
import { Navlinks } from "@/components/nav-link";
import { NavSearch } from "@/components/nav-search";
import { useState } from "react";
export const Navbar = () => {
    console.log("Navbar rendered");

    const [search,setSearch] = useState("")
    return (
        <>
            <Navlinks />
            <NavSearch />
        </>
    );
}