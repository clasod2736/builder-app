"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import { Switch } from "../ui/switch";
import { LabelComponent } from "../Label";
import React from "react";
import { cn } from "@/lib/utils";

interface HeroProps {
  title: string;
  logo?: string;
  description: string;
  badges?: {
    value: string;
  }[];
  actions?: {
    label: string;
    href: string;
  }[];
  switchBtn?: {
    label: {
      left: string;
      right: string;
    }
  }
}

export default function HeroComponent(props: HeroProps) {
  const { title, description, actions, badges, switchBtn } = props;

  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <>
      {/* Hero */}
      <div className="overflow-hidden py-14">
        <div className="z-10">
          <div className="container px-6 py-10">
            <div className="max-w-2xl text-center mx-auto">
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  {title}
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                  {description}
                </p>
              </div>
              {/* Buttons */}
              {actions && actions.length > 0 && <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"}>Get started</Button>
                <Button size={"lg"} variant={"outline"}>
                  Learn more
                </Button>
              </div>}
              {/* Badges */}
              <div className="flex flex-row gap-2 justify-center">
              {badges && badges.map((badge) => {
                return (
                    <Badge key={badge.value} className="mt-5" variant={"outline"}>
                      {badge.value}
                    </Badge>
                );
              })}
              </div>
              {/** Switch */}
              {switchBtn && 
                <div className="flex flex-row justify-center items-center mt-6 gap-4 w-auto">
                  <LabelComponent label={switchBtn.label.left} style={cn("text-lg font-semibold", {
                    "opacity-30": switchValue,
                  })}/>
                  <Switch onClick={() => setSwitchValue(prev => !prev)}/>
                  <LabelComponent label={switchBtn.label.right} style={cn("text-lg font-semibold", {
                    "opacity-30": !switchValue,
                  })}/>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
