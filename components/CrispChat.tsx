" use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9477ba58-ba65-4fa1-b859-588e87089819");
  }, []);

  return null;
};
