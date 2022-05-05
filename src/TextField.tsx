import React from 'react';
import { StructuredType } from 'typescript';

interface Person{
    name: string;
    lastName: string;
}

//This is to pass props in our FC
interface Props{
    text: string;
    ok?: boolean; //adding "?" means optional
    i?: number; //adding "?" means optional
    fn?: (bob: string) => string;
    person: Person;
}

export const TextField: React.FC<Props> = () => {
    return(
        <div>
            <input type="text" />
        </div>
    );
}