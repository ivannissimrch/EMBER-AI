import { Inputs, useStoreContext } from '@/app/helpers/StoreContext';

export default function InspireMeButton({ activeUserInput }: { activeUserInput: Inputs }) {
    const inspiringQuestions: Record<string, string[]> = {
        q1: [
            'You are an forward thinking archeologist',
            'You are a solo traveler',
            'You are a teacher',
            'You are a personal trainer',
            'You are a relationships coach',
            'You are Gordon Ramsey',
            'You are Will Ferrell',
            'You are Chuck Norris',
            'You are a secret agent',
            'You are an alien from another galaxy',
        ],
        q2: [
            'I would like to learn if bringing dinosaurs back from extinction would be good for our ecology',
            'planning a 2 week trip to Japan',
            'I would like to learn how to cook breakfast like a pro',
            'I am looking to grow my knowledge of computer science',
            'I need career change advice',
            'I need a workout routine',
            'I would like to learn how to improve my communication skills',
            'I want to learn about modern booby traps',
            'I want to learn how to take over the world',
        ],
        q3: [
            'Analyze ecological studies and extinction research from the last 5 years to determine how introducing long extinct species into the modern world may impact current ecologies',
            'make a list of must-see and places to shop in Japan. include shops where you can buy matcha',
            'explain step by step how to make breakfast using eggs, coffee, and toast',
            'create a workout using no equipment',
            'explain how I can take over the world using only caveman technology',
        ],
        q4: [
            'Present the results using paragraph format in a professional yet slightly humorous tone',
            'make a bullet point list, separated by city',
            'make it easy to skim',
            'keep it friendly and simple',
            'pretend you are explaining this to a 5 year old',
            'pretend you are explaining this during a stand-up comedy set',
            'pretend you are explaning this to a caveman sent into the current year',
        ],
        q5: [
            'Limit the response to 500 words and avoid political discussions',
            'limit the list to 5 places per city. also include hidden gems, not just popular tourist spots in each spot',
            'add 2 fun facts at the end for bonus',
            'include links and resources when possible',
            'make sure each point has a practical takeaway or tip',
            'make this result as ridiculous as possible',
        ],
    };
    const { updateInputsValues } = useStoreContext();

    function generateRandomQuestion(userInput: Inputs) {
        const questionId = userInput.id;
        const randomNumber = Math.floor(Math.random() * inspiringQuestions[questionId].length);
        const exampleQuestion = inspiringQuestions[questionId][randomNumber];
        updateInputsValues(exampleQuestion, activeUserInput.id);
    }

    return (
        <button
            className="flex mt-[20px] hover:cursor-pointer group"
            onClick={() => generateRandomQuestion(activeUserInput)}
        >
            <svg
                className="group-hover:scale-110 transition-all duration-300 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.9562 4.8663C17.9762 3.8613 16.3599 3.8613 15.3787 4.8663L5.08119 15.4138C4.13244 16.385 4.13244 17.9363 5.08119 18.9075L5.98744 19.835C6.95994 20.8325 8.56244 20.84 9.54619 19.8538L14.6487 14.7388L14.6562 14.7313L19.9162 9.3413C20.8649 8.37005 20.8649 6.82005 19.9162 5.8488L18.9562 4.8663ZM16.7212 6.17505C16.9662 5.92505 17.3699 5.92505 17.6149 6.17505L18.5749 7.1588C18.8124 7.4013 18.8124 7.7888 18.5749 8.03255L17.2649 9.3738L15.4099 7.5188L16.7212 6.17505ZM14.0999 8.86005L6.42244 16.7238C6.18494 16.9663 6.18494 17.355 6.42244 17.5975L7.32869 18.525C7.57244 18.775 7.97244 18.7763 8.21869 18.53L13.3174 13.4175L15.9549 10.715L14.0999 8.86005Z"
                    fill="#61529D"
                />
                <path
                    d="M17.8125 15C18.3287 15 18.75 15.42 18.75 15.9375V16.875H19.6875C20.2038 16.875 20.625 17.295 20.625 17.8125C20.625 18.3312 20.2038 18.75 19.6875 18.75H18.75V19.6875C18.75 20.2063 18.3287 20.625 17.8125 20.625C17.2938 20.625 16.875 20.2063 16.875 19.6875V18.75H15.9375C15.4188 18.75 15 18.3312 15 17.8125C15 17.295 15.4188 16.875 15.9375 16.875H16.875V15.9375C16.875 15.42 17.2938 15 17.8125 15Z"
                    fill="#61529D"
                />
                <path
                    d="M7.1875 4.375C7.70375 4.375 8.125 4.795 8.125 5.3125V6.25H9.0625C9.57875 6.25 10 6.67 10 7.1875C10 7.705 9.57875 8.125 9.0625 8.125H8.125V9.0625C8.125 9.58 7.70375 10 7.1875 10C6.66875 10 6.25 9.58 6.25 9.0625V8.125H5.3125C4.79375 8.125 4.375 7.705 4.375 7.1875C4.375 6.67 4.79375 6.25 5.3125 6.25H6.25V5.3125C6.25 4.795 6.66875 4.375 7.1875 4.375Z"
                    fill="#61529D"
                />
            </svg>
            <p className='text-[#61529D] font-["Helvetica_Neue"] text-[22px] not-italic font-normal leading-[normal]'>
                {' '}
                Inspire Me
            </p>
        </button>
    );
}
