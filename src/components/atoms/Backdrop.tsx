import * as Styled from "../../styles/styled-atoms/StyledBackdrop";

export default function Backdrop({ children, onClick }) {
  return (
    <Styled.ModalWrap
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Styled.ModalWrap>
  );
}
