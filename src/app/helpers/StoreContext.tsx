'use client';
import { createContext, useContext, useState, RefObject, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface Inputs {
    id: string;
    title: string;
    description: string;
    placeHolder: string;
    question: string;
    inputRef: RefObject<HTMLDivElement | null>;
}

export interface Store {
    inputValues: Inputs[];
    userQuestion: string;
    aiAnswer: string;
    id: string;
    prevConversations: PrevConversations;
}

export interface PrevConversations {
    user: string;
    ai: string;
}

interface StoreContext {
    storeValue: Store;
    updateInputsValues: (newValue: string, id: string) => void;
    clearInputValue: (id: string) => void;
    clearAllInputs: () => void;
    getCurrentUserQuestion: () => string;
    updateAiAnswer: (newAnswer: string) => void;
    updatePrevConversations: (currentUserQuestion: string, currentAiAnswer: string) => void;
    scrollToPrevComponent: (input: Inputs, idx: number) => void;
    scrollToNextComponent: (input: Inputs, idx: number) => void;
}

export const StoreValuesContext = createContext<StoreContext | null>(null);

export function StoreProvider({ children }: { children: React.ReactNode }) {
    const personaRef = useRef<HTMLDivElement | null>(null);
    const contextRef = useRef<HTMLDivElement | null>(null);
    const taskRef = useRef<HTMLDivElement | null>(null);
    const outputRef = useRef<HTMLDivElement | null>(null);
    const constrainRef = useRef<HTMLDivElement | null>(null);

    function updateInputsValues(newValue: string, id: string) {
        setStoreValue((prev) => ({
            ...prev,
            inputValues: prev.inputValues.map((input) =>
                input.id === id ? { ...input, question: newValue } : input
            ),
        }));
    }

    function clearInputValue(id: string) {
        setStoreValue((prev) => ({
            ...prev,
            inputValues: prev.inputValues.map((input) =>
                input.id === id ? { ...input, question: '' } : input
            ),
        }));
    }

    function clearAllInputs() {
        setStoreValue((prev) => ({
            ...prev,
            inputValues: prev.inputValues.map((input) => ({
                ...input,
                question: '',
            })),
        }));
    }

    function getCurrentUserQuestion() {
        return storeValue.inputValues.map((inputValue) => inputValue.question).join(' ');
    }

    function updateAiAnswer(newAnswer: string) {
        setStoreValue((prev) => {
            return {
                ...prev,
                aiAnswer: newAnswer,
            };
        });
    }

    function updatePrevConversations(currentUserQuestion: string, currentAiAnswer: string) {
        setStoreValue((prev) => ({
            ...prev,
            prevConversations: {
                user: `${prev.prevConversations.user} ${currentUserQuestion} `,
                ai: `${prev.prevConversations.ai} ${currentAiAnswer}`,
            },
        }));
    }

    function scrollToNextComponent(input: Inputs, idx: number) {
        if (idx < storeValue.inputValues.length - 1) {
            const nextInput = storeValue.inputValues[idx + 1].inputRef.current;
            if (nextInput) {
                nextInput.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
    }

    function scrollToPrevComponent(input: Inputs, idx: number) {
        const prevInput = storeValue.inputValues[idx - 1].inputRef.current;
        if (prevInput) {
            prevInput.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }

    const initialStoreValue: Store = {
        inputValues: [
            {
                id: 'q1',
                title: 'Persona',
                description: 'Assign an identity to the AI.',
                placeHolder: `Give me a role. E.g. “You are a developer.."`,
                question: '',
                inputRef: personaRef,
            },
            {
                id: 'q2',
                title: 'Context',
                description: 'Provide the AI with some background information.',
                placeHolder: `Give me some background. E.g. “new to the industry”`,
                question: '',
                inputRef: contextRef,
            },
            {
                id: 'q3',
                title: 'Task',
                description: 'Specify what you want the AI to do.',
                placeHolder: `Give me some action to perform. E.g. “Analyze market trends”`,
                question: '',
                inputRef: taskRef,
            },
            {
                id: 'q4',
                title: 'Output',
                description: 'Describe the tone of the response.',
                placeHolder: `Give me the style of the response you want. E.g. “keep the tone informal and in bullet point format”`,
                question: '',
                inputRef: outputRef,
            },
            {
                id: 'q5',
                title: 'Constraint',
                description: 'Set boundaries or restrictions for the response.',
                placeHolder: `Give me things I should avoid. E.g. “from the last 6 months in the U.S. Limit to the list to the top 10 trends”`,
                question: '',
                inputRef: constrainRef,
            },
        ],
        userQuestion: '',
        aiAnswer: '',
        id: uuidv4(),
        prevConversations: { user: '', ai: '' },
    };

    const [storeValue, setStoreValue] = useState<Store>(initialStoreValue);
    const contextValue = {
        storeValue,
        updateInputsValues,
        clearAllInputs,
        clearInputValue,
        getCurrentUserQuestion,
        updateAiAnswer,
        updatePrevConversations,
        scrollToNextComponent,
        scrollToPrevComponent,
    };

    return (
        <StoreValuesContext.Provider value={contextValue}>{children}</StoreValuesContext.Provider>
    );
}

export function useStoreContext() {
    const context = useContext(StoreValuesContext);
    if (!context) {
        throw new Error('no context fund');
    }
    return context;
}
