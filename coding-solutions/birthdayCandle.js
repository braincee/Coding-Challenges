function birthdayCakeCandles ( array )
{
    let tall = 0;
    let count = 0;
    for ( let i = 0; i < array.length; i++ )
    {
        if ( array[ i ] > tall )
        {
            tall = array[ i ];
        }
    }
    for ( let i = 0; i < array.length; i++ )
    {
        if ( array[ i ] === tall )
        {
            count = count + 1;
        }
    }
    return count;
}