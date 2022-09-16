function checkTemp()
{
    let value;

    if (value < 21)
    {
        Vas = -1
    }
    else if (value > 40)
    {
        Vas = 1
    }
    else if (value != 20 && 40)
    {
        Vas = 0
    }

    return Vas;
}
