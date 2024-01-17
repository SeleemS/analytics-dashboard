"use client"
import GenderDonut from "./subcomponents/genderdonut"
import AgeBar from "./subcomponents/agebar";
import { Card } from "@tremor/react";

export default function Audience() {
    return (
        <main className="w-full mx-auto my-5">
                <Card className="flex flex-col max-w-sm gap-5">
                    <GenderDonut/>
                    <AgeBar/>
                </Card>
        </main>

    );
}