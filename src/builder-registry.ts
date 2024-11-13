"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Button } from "./components/ui/button";
import Counter from "./components/Counter/Counter";
import NavigationBar from "./components/NavMenu";
import { AvatarComponent } from "./components/Avatar";
import PriceCardComponent from "./components/PriceCard";
import HeroComponent from "./components/Hero";
import { TableComponent } from "./components/Table";
import { LabelComponent } from "./components/Label";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(NavigationBar, {
  name: "NavigationBar",
  inputs: [
    {
      name: "items",
      type: "list",
      subFields: [
        {
          name: "trigger",
          type: "string",
        },
        {
          name: "list",
          type: "list",
          subFields: [
            {
              name: "title",
              type: "string",
            },
            {
              name: "href",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
});

Builder.registerComponent(withChildren(Button), {
  name: "Button",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(AvatarComponent, {
  name: "Avatar",
  inputs: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "img",
      type: "string",
    },
    {
      name: "fallback",
      type: "string",
    },
  ],
});

Builder.registerComponent(PriceCardComponent, {
  name: "Card",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "price",
      type: "number",
    },
    {
      name: "badge",
      type: "object",
      subFields: [
        {
          name: "discount",
          type: "number",
        },
      ],
    },
    {
      name: "href",
      type: "string",
    },
    {
      name: "list",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
        },
        {
          name: "isDisabled",
          type: "boolean",
        },
      ],
    }
  ]
})

Builder.registerComponent(HeroComponent, {
  name: "Hero",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "description",
      type: "string",
    },
    {
      name: "badges",
      type: "list",
      subFields: [
        {
          name: "value",
          type: "string",
        }
      ]
    },
    {
      name: "actions",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
        },
        {
          name: "href",
          type: "string",
        }
      ]
    },
    {
      name: "switchBtn",
      type: "object",
      subFields: [
        {
          name: "label",
          type: "object",
          subFields: [
            {
              name: "left",
              type: "string",
            },
            {
              name: "right",
              type: "string",
            }
          ]
        }
      ]
    }
  ]
})

Builder.registerComponent(TableComponent, {
  name: "Table",
  inputs: [
    {
      name: "caption",
      type: "string",
    },
    {
      name: "header",
      type: "object",
      subFields: [
        {
          name: "heads",
          type: "list",
          subFields: [
            {
              name: "label",
              type: "string",
            },
            {
              name: "width",
              type: "string",
            }
          ]
        }
      ]
    },
    {
      name: "body",
      type: "object",
      subFields: [
        {
          name: "cells",
          type: "list",
          subFields: [
            {
              name: "value",
              type: "string",
            },
            {
              name: "checkValues",
              type: "list",
              subFields: [
                {
                  name: "checked",
                  type: "boolean",
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "footer",
      type: "object",
      subFields: [
        {
          name: "total",
          type: "string",
        }
      ]
    }
  ]
})

Builder.registerComponent(LabelComponent, {
  name: "Label",
  inputs: [
    {
      name: "label",
      type: "string",
    },
    {
      name: "style",
      type: "string",
    },
    {
      name: "align",
      type: "string",
      enum: ["left", "center", "right"],
    }
  ]
})
