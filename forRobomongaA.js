db.transactions.aggregate([{$match:{"Category": "Borrow"}},
                                    {$group:{_id:{friend:"$Friend_id",currency:"$Currency"},Amount:{$sum:"$Amount"}}},
                                     {$project:{_id:"$_id.friend",currency:"$_id.currency",amount:"$Amount"}},
                                     {$group:{_id:"$_id",debts:{$push:{currency:"$currency",total:"$amount"}}}},
                                     {$lookup:{
                                        from:"friends",
                                         localField:"_id",
                                         foreignField:"_id",
                                         as:"_id"
                                         }},
                                      {$project:{"_id":"$_id.name","debts":1}} 
])