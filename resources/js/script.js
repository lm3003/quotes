$(document).ready(function () {

    const randomQuotes = ['Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one' +
    ' day someone might do the same for you.', 'I don\'t believe that if you do good, good things will happen. Everything is' +
    ' completely accidental and random. Sometimes bad things happen to very good people and sometimes good things happen to ' +
    'bad people. But at least if you try to do good things, then you\'re spending your time doing something worthwhile.', 'I ' +
    'believe life is an intelligent thing: that things aren\'t random.', 'It is necessary to fall in love... if only to provide ' +
    'an alibi for all the random despair you are going to feel anyway.'];
    const authors = ['Princess Diana', 'Helen Mirren', 'Steve Jobs', 'Albert Camus'];
    $("#quote-lines").text(randomQuotes[0]);
    $("#author").text(authors[0]);



    $("#new-quote").on("click", function () {
        var randomNumber = Math.floor(Math.random()*(randomQuotes.length - 1));
        var randomQuote = randomQuotes[randomNumber];
        var authorName = authors[randomNumber];
        $("#quote-lines").text(randomQuote);
        $("#author").text(authorName);
    });



});

