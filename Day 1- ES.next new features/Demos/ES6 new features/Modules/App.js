import {generateRandom, sum} from 'utilityModule';

function calcRandom()
{
	return Math.ceil(generateRandom());
}

function calcSum(x,y)
{
	return sum(x,y);
}

//Can't access sub(), as it's not exported

        
