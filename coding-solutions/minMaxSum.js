function minMaxSum ( array )
{
    let max = array[ 0 ];
    let min = array[ 0 ];
    let sum = 0;
    for ( let i = 0; i < array.length; i++ )
    {
        if ( array[ i ] < max )
        {
            max = array[ i ];
        }
        if ( array[ i ] > min )
        {
            min = array[ i ];
        }

        sum = sum + array[ i ];
    }

    console.log( sum - min, sum - max );
}