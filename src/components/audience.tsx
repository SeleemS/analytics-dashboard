"use client"
import GenderDonut from "./subcomponents/genderdonut"
import AgeBar from "./subcomponents/agebar";
import { Card } from "@tremor/react";

export default function Audience() {
    return (
        <main className="w-full">
                <Card className="flex flex-col max-w-sm gap-4" decoration="top" decorationColor="blue">
                    <GenderDonut/>
                    <AgeBar/>
                </Card>
        </main>

    );
}