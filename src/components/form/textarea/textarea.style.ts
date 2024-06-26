import styled from "styled-components";
import { pxToRem } from "../../../utils/pxToRem";

export const Container = styled.div<{ $fullWidth: boolean }>`
    display: flex;
    flex-direction: column;
    width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};
`;

export const Label = styled.label`
    font-weight: 600;
    color: #555;
    margin-bottom: ${pxToRem(6)};
`;

export const Input = styled.textarea<{ $minHeight?: number }>`
    ${({ $minHeight }) => $minHeight && `min-height: ${pxToRem($minHeight)};`};
    border: 1px solid #ced4da;
    border-radius: ${pxToRem(3)};
    padding: ${pxToRem(4)};
    font-size: ${pxToRem(14)};
    padding: ${pxToRem(8)};
    resize: vertical;
`;

export const ErrorLabel = styled.span``;
