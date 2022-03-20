import $ from 'jquery'

$('<h1 />')
    .text('Hello world from jquery')
    .css({
        textAlign: 'center',
        color: 'blue'
    })
    .appendTo($('header'))