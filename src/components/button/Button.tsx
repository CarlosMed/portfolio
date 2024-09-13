import { usePlausible } from "next-plausible";
import React from "react";
import ExternalButton from "./ExternalButton";
import InternalButton from "./InternalButton";

export default function Button(props) {
  const plausible = usePlausible();
  return (
    <>
      {props.external ? (
        <ExternalButton props={props} plausible={plausible} />
      ) : (
        <InternalButton props={props} plausible={plausible} />
      )}
    </>
  );
}
