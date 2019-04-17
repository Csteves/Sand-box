using System;
using System.Collections.Generic;

namespace ControllChallenges
{
    class MainClass
    {
        public static void Main(string[] args)
        {

            {
                bool isNeg = false;
                if (n < 0)
                {
                    n *= -1;
                    isNeg = true;
                }
                char[] numArr = n.ToString().ToCharArray();
                List<string> result = new List<string>();
                for (int i = numArr.Length - 1; i >= 0; i--)
                {
                    result.Add(numArr[i].ToString());
                }
                n = int.Parse(String.Join("", result));
                if (isNeg) n *= -1;
                return n;
            }
        }

    }
}