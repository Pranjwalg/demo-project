import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SignupWrapper } from './SignupWrapper';

const SignupWithEmailPage = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const renderFormSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Signup with Email ID</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Enter your company name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number</Label>
                <Input id="mobile" placeholder="Enter your mobile number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">I accept all terms & conditions and privacy policy</Label>
              </div>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Australian Company Identification Procedure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="asicName">Name Registered by ASIC</Label>
                <Input id="asicName" placeholder="Enter ASIC name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tradingName">Trading Name</Label>
                <Input id="tradingName" placeholder="Enter trading name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="acn">ACN</Label>
                <Input id="acn" placeholder="Enter ACN" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="abn">ABN</Label>
                <Input id="abn" placeholder="Enter ABN" />
              </div>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Registered Office Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">(PO Box is NOT Acceptable)</p>
              <div className="space-y-2">
                <Label htmlFor="street">Street</Label>
                <Input id="street" placeholder="Enter street address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="suburb">Suburb</Label>
                <Input id="suburb" placeholder="Enter suburb" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input id="state" placeholder="Enter state" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="postcode">Postcode</Label>
                <Input id="postcode" placeholder="Enter postcode" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alternateNumber">Alternate Number</Label>
                <Input id="alternateNumber" placeholder="Enter alternate number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faxNumber">Fax Number</Label>
                <Input id="faxNumber" placeholder="Enter fax number" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="proprietary" />
                <Label htmlFor="proprietary">Proprietary (companies whose name ends with Pty Ltd)</Label>
              </div>
            </CardContent>
          </Card>
        );
      case 4:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="paymentTerms">Advance Payment Terms</Label>
                <Select>
                  <SelectTrigger id="paymentTerms">
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance">Advance Payment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="deliveryTerms">Delivery Terms</Label>
                <Select>
                  <SelectTrigger id="deliveryTerms">
                    <SelectValue placeholder="Select delivery terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="term1">Delivery Term 1</SelectItem>
                    <SelectItem value="term2">Delivery Term 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    if (currentSection < 4) setCurrentSection(currentSection + 1);
  };

  const handleBack = () => {
    if (currentSection > 1) setCurrentSection(currentSection - 1);
  };

  return (
    <SignupWrapper
      footerText="Already have an account?"
      footerLink="/login"
      footerLinkText="Login"
    >
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex justify-center mb-8">
          {[1, 2, 3, 4].map((section) => (
            <Button
              key={section}
              variant={currentSection === section ? "default" : "outline"}
              className="w-10 h-10 rounded-full mx-2"
              onClick={() => setCurrentSection(section)}
            >
              {section}
            </Button>
          ))}
        </div>

        {renderFormSection()}

        <div className="flex justify-between mt-8">
          <Button
            onClick={handleBack}
            disabled={currentSection === 1}
            variant="outline"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentSection === 4}
          >
            Next
          </Button>
        </div>
      </div>
    </SignupWrapper>
  );
};

export default SignupWithEmailPage;