import React, {
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactNode,
  useState,
} from "react";
import { usePopper } from "react-popper";

type PopUpProps = {
  trigger: ButtonHTMLAttributes<HTMLButtonElement>;
  popUp: HTMLAttributes<HTMLDivElement>;
  showPopUp?: boolean;
};

const PopUp = ({ trigger, popUp, showPopUp = false }: PopUpProps) => {
  const [referenceElement, setReferenceElement] =
    useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-start",
  });

  return (
    <>
      <button {...trigger} type="button" ref={setReferenceElement} />
      {showPopUp && (
        <div
          {...popUp}
          ref={setPopperElement}
          style={{ ...styles.popper, zIndex: 10 }}
          {...attributes.popper}
        />
      )}
    </>
  );
};

export default PopUp;
