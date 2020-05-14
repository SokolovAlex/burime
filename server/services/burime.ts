enum TitleType {
    noun = 'noun',
    AdjectiveAndNounMale = 'AdjectiveAndNounMale',
    AdjectiveAndNounFemale = 'AdjectiveAndNounFemale',
    verb = 'verb',
    someVerbs = 'someVerbs',
    ready = 'ready',
}

enum WordType {
    nounMale = 'nounMale',
    nounFemale = 'nounFemale',
    adjectiveFemale = 'adjectiveFemale',
    adjectiveMale = 'adjectiveMale',
    verb = 'verb',
    beforeVerb = 'beforeVerb',
    ready = 'ready',
}

const collections =  {
    [WordType.nounFemale]: ['любовь', 'судьба', 'ночь', 'история', 'родина', 'ягодица', 'неповторимость', 'случайность', 'осень', 'красота', 'ерунда', 'комедия', 'зима', 'нефть', 'несправедливость', 'месть', 'бомба'],
    [WordType.nounMale]: ['помидор', 'волк', 'мрак', 'смех', 'характер', 'гордость', 'обман', 'двор', 'король', 'поцелуй', 'шторм', 'город', 'шнурок', 'мороз', 'порох', 'провод', 'рок'],
    [WordType.adjectiveFemale]: ['гордая', 'случайная', 'темная', 'неописуемая', 'безумная', 'невыносимая', 'нерешительная', 'заманчивая', 'нежная', 'соблазнительная', 'обманчивая'],
[WordType.adjectiveMale]: ['горный', 'запоздалый', 'светлый', 'сломаный', 'ветренный', 'кислый', 'иллюзорный', 'долгожданный', 'звериный', 'мокрый', 'глубокий', 'микроскопический', 'подвальный', 'тихий', 'романтичный', 'первый'],
    [WordType.verb]: ['любить', 'петь', 'смеяться', 'горевать', 'страдать', 'быть', 'не говорить', 'бояться', 'елозить', 'грезить', 'бежать', 'нервничать по пустякам', 'не любить'],
    [WordType.beforeVerb]: ['люблю', 'могу', 'хочу', 'ненавижу', 'лишь бы', 'боюсь', 'избегаю', 'не проси', 'првычка', 'мечтаю', 'не получилось', 'как научиться', 'я тебе помогу'],
    [WordType.ready]: ['а вы могли бы?', 'я вас любил...', 'смеятся над собой', 'в городском саду', '3/4', 'шорох мозга', 'топот интеллектуалов', 'что такое осень?', 'весь мир театр', 'все связано', 'я памятник себе воздвиг', 'все переплетено',
    'как Дон Кихот', 'как Донцова', 'кто бы что ни говорил', 'пятая масть', 'антипоэт', 'дети от сети', 'экс-гражданин', 'я сижу в темноте', 'диваннные войска', 'вокруг света', 'я входил вместо дикого зверя в клетку'],
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
        case TitleType.someVerbs: 
            return `${getRandomFromCollection(collections[WordType.beforeVerb])} ${getRandomFromCollection(collections[WordType.verb])}`;
        default: 
            return getRandomFromCollection(collections[WordType.ready]); ;
    }
}