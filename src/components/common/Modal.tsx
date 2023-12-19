import React, { FormEvent, ReactNode } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import BackDrop from "./BackDrop";
import { CSSTransition } from "react-transition-group";

interface ModalProps {
  show: boolean;
  onCancel: () => void;
  className?: string;
  children: ReactNode;
  onSubmit?: (e: FormEvent) => void;
}

const ModalLayout = styled.div``;
const ModalCloseIcon = styled.div``;
const ModalForm = styled.form``;
const ModalContent = styled.div``;

const ModalOverlay: React.FC<ModalProps> = ({
  className,
  onCancel,
  children,
  onSubmit,
}) => {
  const content = (
    <ModalLayout className={className}>
      <ModalCloseIcon onClick={onCancel}>Close Modal</ModalCloseIcon>
      <ModalForm onSubmit={onSubmit ? onSubmit : e => e.preventDefault()}>
        <ModalContent>{children}</ModalContent>
      </ModalForm>
    </ModalLayout>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("portal") as HTMLElement,
  );
};

const Modal: React.FC<ModalProps> = props => {
  console.log(props);
  return (
    <>
      {props.show && <BackDrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;
