var countClicks = 0;
var countClicksSmall = 0;
var dataImage = document.getElementById('largeImage');
var smallDataImage = document.getElementById('smallImage');

dataImage.addEventListener('click', () => 
{
    countClicks ++;
    console.log(countClicks);

    if (countClicks == 9)
    {
        countClicks = 0;
    }

    if (countClicks == 0)
    {
        dataImage.src = 'img/1.jpg';
    }
    if (countClicks == 1)
    {
        dataImage.src = 'img/2.jpg';
    }
    if (countClicks == 2)
    {
        dataImage.src = 'img/3.jpg';
    }
    if (countClicks == 3)
    {
        dataImage.src = 'img/4.jpg';
    }
    if (countClicks == 4)
    {
        dataImage.src = 'img/5.jpg';
    }
    if (countClicks == 5)
    {
        dataImage.src = 'img/6.jpg';
    }
    if (countClicks == 6)
    {
        dataImage.src = 'img/7.jpg';
    }
    if (countClicks == 7)
    {
        dataImage.src = 'img/8.jpg';
    }
    if (countClicks == 8)
    {
        dataImage.src = 'img/9.jpg';
    }

});

smallDataImage.addEventListener('click', () => 
{
    countClicksSmall ++;
    console.log(countClicksSmall);

    if (countClicksSmall == 9)
    {
        countClicksSmall = 0;
    }

    if (countClicksSmall == 0)
    {
        smallDataImage.src = 'img/1.jpg';
    }
    if (countClicksSmall == 1)
    {
        smallDataImage.src = 'img/2.jpg';
    }
    if (countClicksSmall == 2)
    {
        smallDataImage.src = 'img/3.jpg';
    }
    if (countClicksSmall == 3)
    {
        smallDataImage.src = 'img/4.jpg';
    }
    if (countClicksSmall == 4)
    {
        smallDataImage.src = 'img/5.jpg';
    }
    if (countClicksSmall == 5)
    {
        smallDataImage.src = 'img/6.jpg';
    }
    if (countClicksSmall == 6)
    {
        smallDataImage.src = 'img/7.jpg';
    }
    if (countClicksSmall == 7)
    {
        smallDataImage.src = 'img/8.jpg';
    }
    if (countClicksSmall == 8)
    {
        smallDataImage.src = 'img/9.jpg';
    }

});

