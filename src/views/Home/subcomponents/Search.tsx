import React from 'react';
import {
    CardLabel,
    CardPhoto,
    CardsContainer,
    SearchButtonWrapper,
    SearchCard,
    SearchInput,
    SearchInputWrapper,
    SearchLabel,
    SearchWrapper,
} from './Search.styled';
import Button from "components/Button/Button";

const Search = ({onClick}:any) => {
    return (
        <SearchWrapper>
            <SearchLabel>Ask a question</SearchLabel>
            <SearchInputWrapper>
                <SearchInput placeholder={'Type your question'} />
            </SearchInputWrapper>
            <SearchButtonWrapper>
                <Button size={'small'} onClick={onClick}>
                    SEND QUESTION
                </Button>
            </SearchButtonWrapper>
            <SearchLabel>Frequently asked questions</SearchLabel>
            <CardsContainer>
                <SearchCard>
                    <CardPhoto />
                    <CardLabel>Cosmetic surgery abroad making the right choice</CardLabel>
                </SearchCard>
                <SearchCard>
                    <CardPhoto />
                    <CardLabel>Cosmetic surgery abroad making the right choice</CardLabel>
                </SearchCard>
                <SearchCard>
                    <CardPhoto />
                    <CardLabel>Cosmetic surgery abroad making the right choice</CardLabel>
                </SearchCard>
            </CardsContainer>
        </SearchWrapper>
    );
};

export default Search;
