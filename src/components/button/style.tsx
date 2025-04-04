import styled, { css } from "styled-components";
import { iStyledButtonProps } from "./types";

export const StyledButton = styled.button<iStyledButtonProps>`
  ${({ buttonVariation }) => {
        switch (buttonVariation) {
            case "type1":
                return css`
                    height: 103px;
                    width: 427px;
                    color: #88FF3F;
                    font-size: 75px;
                    border: 1px solid #88ff3f;
                    border-radius: 10px;
                    background-color: #121212;

                    &:hover{
                        cursor: pointer;
                        background-color: rgba(137, 255, 63, 0.5);
                    }
                `;
            case "type2":
                return css `
                    height: 76px;
                    width: 304px;
                    color: #88FF3F;
                    font-size: 50px;
                    border: 1px solid #88ff3f;
                    border-radius: 10px;
                    background-color: #121212;

                    &:hover{
                        cursor: pointer;
                        background-color: rgba(137, 255, 63, 0.5);
                    }
                `;
            case "type3":
                return css `
                    height: 76px;
                    width: 304px;
                    color:rgba(137, 255, 63, 0.5);
                    font-size: 50px;
                    border: 1px solid rgba(137, 255, 63, 0.5);
                    border-radius: 10px;
                    background-color: #121212;
                `;
            case "type4":
                return css `
                    width: 202px;
                    height: 51px;
                    color: #88FF3F;
                    font-size: 35px;
                    border: 1px solid #88ff3f;
                    border-radius: 10px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                    background-color: #121212;

                    &:hover{
                        cursor: pointer;
                        background-color: rgba(137, 255, 63, 0.5);
                        img {
                            background-color: rgba(137, 255, 63, 0.0);
                        }
                    }
                `;
        }   
    }
}`;