const quotes =[
    {
        quote: "가끔은 혁신을 추구하다 실수할 때도 있다.하지만 빨리 인정하고다른 혁신을 개선해 나가는 것이 최선이다.",
        author: '-스티브 잡스-',
    },
    {
        quote: "휴식은 게으름도, 멈춤도 아니다.",
        author: '-헨리 포드-',
    },
    {
        quote: "배우기만 하고 생각하지 않으면얻는 것이 없고,생각만 하고 배우지 않으면 위태롭다.",
        author: '-공자-',
    },
    {
        quote: "자신의 꿈을 만들어가지 못하면 언젠가 남의 꿈을 이루는데 이용될 것이다.",
        author: '-암바니-',
    },
    {
        quote: "아무런 위험을 감수하지 않는다면더 큰 위험을 감수하게 될 것이다.",
        author: '-에리카 종-',
    },
    {
        quote: "실패는 고통스럽다.그러나 최선을 다하지 못했음을 깨닫는 것은 몇 배 더 고통스럽다.",
        author: '-앤드류 매튜스-',
    },
    {
        quote: "성공을 원한다면 많은 것들과 친해져야 한다.인내심은 당신의 소중한 친구로,경험은 친절한 상담자로,신중함은 당신의 형제로,희망은 늘 곁에서 지켜주는 부모님처럼 친해져야 한다.",
        author: '-에디슨-',
    },
    {
        quote: "자신이 대중과 똑같아질 때는 잠시 쉬고 고민할 때이다.",
        author: '-마크 트웨인-',
    },
    {
        quote: "아무 하는 일 없이 시간을 허비하지 않겠다고 맹세하라.우리가 항상 뭔가를 한다면 놀라우리만치 많은 일을 해낼 수 있다.",
        author: '-토마스 제퍼슨-',
    },
    {
        quote: "다른 사람들이 할 수 있거나 할 일을 하지 말고,다른 이들이 할 수 없고 하지 않은 일들을 해라.",
        author: '-아멜리아 에어하트-',
    },


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()  *  quotes.length)]


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;