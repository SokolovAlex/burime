enum TitleType {
    noun = 'noun',
    AdjectiveAndNounMale = 'AdjectiveAndNounMale',
    AdjectiveAndNounFemale = 'AdjectiveAndNounFemale',
    verb = 'verb',
    ready = 'ready',
}

enum WordType {
    nounMale = 'nounMale',
    nounFemale = 'nounFemale',
    adjectiveFemale = 'adjectiveFemale',
    adjectiveMale = 'adjectiveMale',
    verb = 'verb',
    ready = 'ready',
}

const collections =  {
    [WordType.nounFemale]: ['любовь', 'судьба', 'ночь', 'история', 'родина', 'ягодица', 'неповторимость', 'случайность', 'осень', 'красота', 'ерунда', 'комедия'],
    [WordType.nounMale]: ['помидор', 'волк', 'мрак', 'смех', 'характер', 'гордость', 'обман', 'двор', 'король', 'поцелуй', 'шторм', 'город'],
    [WordType.adjectiveFemale]: ['гордая', 'случайная', 'темная', 'неописуемая', 'безумная', 'невыносимая'],
    [WordType.adjectiveMale]: ['горный', 'запоздалый', 'светлый', 'сломаный', 'ветренный', 'кислый', 'иллюзорный', 'долгожданный', 'звериный', 'мокрый', 'глубокий'],
    [WordType.verb]: ['любить', 'петь', 'смеяться', 'горевать', 'страдать', 'быть', 'не говорить', 'бояться'],
    [WordType.ready]: ['а вы могли бы?', 'я вас любил...', 'смеятся над собой', 'в городском саду', '3/4', 'шорох мозга', 'топот интеллектуалов', 'что такое осень?', 'весь мир театр', 'все связано', 'я памятник себе воздвиг'],
}

const types = Object.keys(TitleType);

const getRandomFromCollection = (array: any[]) => {
    const randomIndex = Math.floor(Math.random() * array.length) || 0;
    return array[randomIndex];
}

export const randomTitle = () => {
    const randomType = getRandomFromCollection(types) as TitleType;
    switch(randomType) {
        case TitleType.noun:
            return getRandomFromCollection([...collections[WordType.nounMale], ...collections[WordType.nounFemale]]);
        case TitleType.verb: 
            return getRandomFromCollection(collections[WordType.verb]);
        case TitleType.AdjectiveAndNounFemale:
            return `${getRandomFromCollection(collections[WordType.adjectiveFemale])} ${getRandomFromCollection(collections[WordType.nounFemale])}`; 
        case TitleType.AdjectiveAndNounMale: 
        return `${getRandomFromCollection(collections[WordType.adjectiveMale])} ${getRandomFromCollection(collections[WordType.nounMale])}`; 
        default: 
            return getRandomFromCollection(collections[WordType.ready]); ;
    }
}