/* SQL Query */

/* Aim : Write an SQL query that returns the the list of addresses which has recently made a trade, and wallet has at least $500 (total balance) in it.  */ 

/* Recent trade => block_height > 730000 */

/* Balance calculation:

If denom == "usdc" , then amount * $0.000001
If denom == "swth", then amount * $0.00000005
If denom == "tmz", then amount *  $0.003  */

SELECT b.address                                /* Retrieve the address column of balances table */
FROM balances as b

INNER JOIN trades as t                          /* Retrieve the matching address columns of trade and balances where the block height is greater than 730000 */
ON t.address = b.address
WHERE t.block_height > 730000

GROUP BY b.address                              /* Display the address columns whose total balance is greater than or equal to 500 */
HAVING SUM(
    CASE b.denom                                /* Balance is calculated using their denom values */
        WHEN 'usdc' THEN b.amount * 0.000001
        WHEN 'swth' THEN b.amount * 0.00000005
        WHEN 'tmz' THEN b.amount * 0.003
    END 
) >= 500;
