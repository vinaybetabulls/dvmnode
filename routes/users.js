var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
 var stripeApiKey = "sk_test_m6QbXoFSs7y3wefvCkJEIDOc";
var stripeApiKeyTesting = "pk_test_LT4bLxgQ7mkg56csk4rPA7vg"
var stripe = require('stripe')("sk_test_m6QbXoFSs7y3wefvCkJEIDOc");
/*Start Plan */
router.post('/startPlan',function(req,res){
	console.log(req.body);

	 stripe.customers.create({
     email: req.body.stripeEmail,
     source: req.body.stripeToken,
	 metadata:{name:req.body.stripeBillingName}
  }).then(function(customer){
		  console.log(customer);
		  stripe.subscriptions.create({
				customer: customer.id,
				plan: "dvm_start_plan",
				metadata:{name:req.body.email}
			})
			.then(function(customer){
				console.log(customer);
				res.send("success");
			})
			.catch(function(err){
				console.log(err)
			})
	})
  .catch(function(err){
	  console.log(err)
  })
});
/*End Start Plan */
/*Grow Plan */

router.post('/growPlan',function(req,res){
	//console.log(req.body);

	 stripe.customers.create({
     email: req.body.stripeEmail,
     source: req.body.stripeToken,
	 metadata:{name:req.body.stripeBillingName}
  }).then(function(customer){
		  //console.log(customer);
		  stripe.subscriptions.create({
				customer: customer.id,
				plan: "dvm_grow_plan",
				metadata:{name:req.body.email}
			})
			.then(function(subscription){
				console.log(subscription);
				res.send(subscription);
			})
			.catch(function(err){
				console.log(err)
			})
	})
  .catch(function(err){
	  console.log(err)
  })
});
/*End Grow Plan */
/* Lead Plan */
router.post('/leadPlan',function(req,res){
	//console.log(req.body);

	 stripe.customers.create({
     email: req.body.stripeEmail,
     source: req.body.stripeToken,
	 metadata:{name:req.body.stripeBillingName}
  }).then(function(customer){
		  //console.log(customer);
		  stripe.subscriptions.create({
				customer: customer.id,
				plan: "dvm_lead_plan",
				metadata:{name:req.body.email}
			})
			.then(function(subscription){
				console.log(subscription);
				res.send(subscription);
			})
			.catch(function(err){
				console.log(err)
			})
	})
  .catch(function(err){
	  console.log(err)
  })
});
/*End Lead Plan */
module.exports = router;
