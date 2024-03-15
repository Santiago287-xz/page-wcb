import React from "react";
import {
  Collapse,
  Button,
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { siteConfig } from "@/config/site";

export default function CollapseDefault() {
  const [open, setOpen] = React.useState(1);

  const toggleOpen = (id: number) => {
    if (id !== 1) {
      setOpen(id);
    } else {
      setOpen(open == 1 ? 0 : 1);
    }
  };

  return (
    <div className="w-4/5 m-auto">
      {siteConfig.about_section.map((item) => (
        <div key={item.id} className="flex">
          <div className="w-1/3">
            <Button
              onClick={() => toggleOpen(item.id)}
              className={`${
                open === item.id ? "h-16" : ""
              } flex flex-col justify-between text-xl rounded h-auto`}
            >
              <div className="flex items-center">
                {item.path}
                <span className="ml-2 text-xl font-bold">{item.title}</span>
              </div>
              <span
                className={`${
                  open !== item.id && "hidden"
                } text-sm text-light-blue-500 font-bold ml-2`}
              >
                {item.subtitle}
              </span>
            </Button>
          </div>
          <div className="w-2/3">
            <Collapse open={open === item.id}>
              <Card className="my-4 mx-auto w-8/12 ">
                <CardBody>
                  <Typography>{item.info}</Typography>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
      ))}
    </div>
  );
}
