import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Plus } from "lucide-react";
import billingChild from "@/assets/billing-child.png";

const Billing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$9.99",
      period: "/month",
      features: [
        "Access to limited printables",
        "AI image generation (limited)",
        "Basic customer support"
      ],
      buttonText: "Select Plan",
      popular: false
    },
    {
      name: "Premium Plan", 
      price: "$19.99",
      period: "/month",
      features: [
        "Unlimited printable access",
        "AI image generation unlimited",
        "Priority customer support",
        "Exclusive content library"
      ],
      buttonText: "Select Plan",
      popular: true
    },
    {
      name: "Family Plan",
      price: "$29.99", 
      period: "/month",
      features: [
        "Unlimited AI image generations",
        "Unlimited printables access",
        "Access for up to 5 users",
        "New content weekly"
      ],
      buttonText: "Select Plan",
      popular: false
    }
  ];

  const paymentMethods = [
    { type: "Visa ending in 4242", status: "Primary", icon: "💳" },
    { type: "Mastercard ending in 8444", status: "", icon: "💳" }
  ];

  const billingHistory = [
    { date: "2024-01-15", description: "Premium Plan Subscription", amount: "$19.99", status: "Paid" },
    { date: "2024-01-21", description: "Premium Plan Subscription", amount: "$19.99", status: "Paid" },
    { date: "2024-01-14", description: "Premium Plan Subscription", amount: "$19.99", status: "Paid" },
    { date: "2024-01-01", description: "Premium Plan Subscription", amount: "$19.99", status: "Paid" }
  ];

  const faqItems = [
    "How do I change my subscription plan?",
    "What payment methods do you accept?", 
    "How can I view my past invoices?",
    "Is my payment information secure?"
  ];

  return (
    <div className="min-h-screen bg-background font-bubblegum">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 flex items-center justify-center gap-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Manage Your EduPlayground Subscription
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Unlock unlimited creativity! Choose the perfect plan for 
              your family or classroom. Manage payments and review your 
              billing history with ease.
            </p>
          </div>
          <div className="hidden lg:block">
            <img 
              src={billingChild} 
              alt="Child with building blocks" 
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Choose Your Perfect Plan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-foreground">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}<span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-success mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-primary hover:bg-primary-dark text-primary-foreground' 
                        : 'bg-success hover:bg-success/90 text-white'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Your Payment Methods</h2>
          
          <div className="space-y-4">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="flex items-center justify-between p-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="font-medium text-foreground">{method.type}</p>
                      {method.status && (
                        <Badge variant="secondary">{method.status}</Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </CardContent>
              </Card>
            ))}
            
            <Button variant="outline" className="w-full border-dashed border-2 h-16">
              <Plus className="w-5 h-5 mr-2" />
              Add New Payment Method
            </Button>
          </div>
        </section>

        {/* Billing History */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Billing History</h2>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-medium text-foreground">Date</th>
                      <th className="text-left p-4 font-medium text-foreground">Description</th>
                      <th className="text-left p-4 font-medium text-foreground">Amount</th>
                      <th className="text-left p-4 font-medium text-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingHistory.map((item, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-4 text-foreground">{item.date}</td>
                        <td className="p-4 text-foreground">{item.description}</td>
                        <td className="p-4 text-foreground">{item.amount}</td>
                        <td className="p-4">
                          <Badge className="bg-success text-white">{item.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqItems.map((question, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="flex items-center justify-between p-6">
                  <p className="font-medium text-foreground">{question}</p>
                  <Button variant="ghost" size="sm">
                    <span className="text-xl">+</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Billing;