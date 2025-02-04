import { Button, Input } from "@heroui/react";
import React from "react";
import { SendHorizonal } from "lucide-react";

function Inputs() {
  return (
    <div className="absolute bottom-0 left-0 w-full sm:mb-5 flex sm:gap-1">
      <Input type="text" label="Enter your message" />
      <Button className="h-auto bg-blue-400" >
        <SendHorizonal className="h-5 w-5" />
      </Button>
    </div>
  );
}

export default Inputs;
