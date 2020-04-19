import styled from 'styled-components';

export const SliderList = styled.div<{ translateX: number }>`
    transform: translateX(${({ translateX }) => translateX ? `-${translateX}%` : '0%'});
    transition: transform 0.6s ease-in-out;
`;

export const SliderTrack = styled.div`
    width: auto;
    position: relative;
    height: auto;
    width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: top;
`;

export const SliderWrapper = styled.div<{ padding?: string, margin?: string; }>`
    position: relative;
    padding: ${props => props.padding || '0px 0px'};
    margin: ${props => props.margin || '0px 0px'};
`;

export const CardWrapper = styled.div<{ width: number }>`
    outline: none;
    width: ${({ width }) => `${width}%`};
    min-height: 1px;
    margin: 0;
    padding: 0;
    display: inline-block;
    vertical-align: top;
    white-space: normal;
`;

export const LeftArrow = styled.button`
    color: #000;
    position: absolute;
    margin-left: 3px;
    margin-top: 11px;
    width: 16px;
    height: 2px;
    background-color: #000000;
    left: 0px;
    top: calc(50% - 5px);
    border: 0;
    cursor: pointer;
    outline: none;
    z-index: 1;
    :before {
        content: '';
        position: absolute;
        left: 1px;
        top: -5px;
        width: 10px;
        height: 10px;
        border-top: solid 2px #000000;
        border-right: solid 2px #000000;
        transform: rotate(-135deg);
    }
    :after {
        content: '';
        position: absolute;
    }
`;

export const RightArrow = styled.button`
    color: #000;
    position: absolute;
    margin-left: 2px;
    margin-top: 11px;
    width: 16px;
    height: 1px;
    background-color: #000000;
    right: 0px;
    top: calc(50% - 5px);
    border: 0;
    cursor: pointer;
    outline: none;
    :before {
        content: '';
        position: absolute;
        right: 1px;
        top: -5px;
        width: 10px;
        height: 10px;
        border-top: solid 2px #000000;
        border-right: solid 2px #000000;
        transform: rotate(45deg);
    }
    :after {
        content: '';
        position: absolute;
    }
`;

export const DotsWrapper = styled.ul`
    display: block;
    list-style: none;
    text-align: center;
    padding: 0px;
    margin: 0px;
`;

export const Dot = styled.li<{ active: boolean }>`
    display: inline-block;
    pointer-events: none;
    button {
        pointer-events: all;
        border: 0;
        background: 0 0;
        cursor: pointer;
        font-size: 1.8em;
        line-height: 1.2em;
        margin: 0 5px;
        ${({ active }) => active ? 'color: #000000;' : 'color: #E5E5E5;'}
        :hover {
            color: #000000;
        }
        :focus {
            outline: none;
        }
    }`;