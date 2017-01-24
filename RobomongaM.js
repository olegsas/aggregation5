db.transactions.aggregate([{$match:{"Category": "Borrow"}},
{$lookup:{
                                        from:"friends",
                                         localField:"Friend_id",
                                         foreignField:"_id",
                                         as:"Friends_Obj"
                                         }},                                

{$group:{_id:{friend:"$Friends_Obj.name",currency:"$Currency"},Amount:{$sum:"$Amount"}}}
// {$project:{_id:"$_id.friend",currency:"$_id.currency",amount:"$Amount"}},
// {$group:{_id:"$_id",debts:{$push:{currency:"$currency",total:"$amount"}}}}
                                     
//                                       {$project:{"_id":"$_id.name","debts":1}} 
])