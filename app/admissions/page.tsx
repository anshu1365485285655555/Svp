import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "Information about the admission process, fees, and requirements at Sikar Vidyapeeth Senior Secondary School.",
}

export default function AdmissionsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Admissions</h1>

      <div className="max-w-3xl mx-auto mb-16">
        <div className="bg-primary/10 p-8 rounded-lg text-center mb-8">
          <h2 className="text-2xl font-semibold mb-4">Admissions Open for 2025-26</h2>
          <p className="text-lg mb-6">
            Join Sikar Vidyapeeth for a transformative educational journey. Limited seats available across all classes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#admission-form">Apply Online</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#admission-procedure">Learn More</Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="procedure" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="procedure">Procedure</TabsTrigger>
            <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>

          <TabsContent value="procedure" className="p-6 border rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">Admission Procedure</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong>Application Submission:</strong> Complete and submit the admission form online or at the school
                office.
              </li>
              <li>
                <strong>Entrance Assessment:</strong> Students applying for classes I and above will undergo an entrance
                assessment to evaluate their academic readiness.
              </li>
              <li>
                <strong>Interview:</strong> A personal interview with the student and parents will be conducted.
              </li>
              <li>
                <strong>Results:</strong> Admission results will be communicated within a week of the assessment and
                interview.
              </li>
              <li>
                <strong>Fee Payment:</strong> Upon selection, secure admission by paying the required fees within the
                specified timeframe.
              </li>
              <li>
                <strong>Document Verification:</strong> Submit all required documents for verification.
              </li>
            </ol>
          </TabsContent>

          <TabsContent value="eligibility" className="p-6 border rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">Eligibility Criteria</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Pre-Primary (Play Group to KG)</h4>
                <p>Children must have attained the minimum age requirement as of 31st March of the academic year:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Play Group: 2.5+ years</li>
                  <li>Nursery: 3+ years</li>
                  <li>KG: 4+ years</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium">Primary (Classes I to V)</h4>
                <p>
                  Students must have successfully completed the previous class from a recognized school and meet the age
                  criteria.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Middle & Secondary (Classes VI to X)</h4>
                <p>
                  Students must have passed the previous class with satisfactory academic performance and provide
                  transfer certificates from their previous school.
                </p>
              </div>

              <div>
                <h4 className="font-medium">Senior Secondary (Classes XI & XII)</h4>
                <p>
                  Students must have passed Class X from a recognized board with the minimum percentage required for
                  their chosen stream:
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Science: Minimum 75% in Science and Mathematics</li>
                  <li>Commerce: Minimum 70% overall</li>
                  <li>Arts: Minimum 65% overall</li>
                  <li>Agriculture: Minimum 70% in Science</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="p-6 border rounded-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Completed admission form</li>
              <li>Birth certificate (original and photocopy)</li>
              <li>Previous school's transfer certificate (for classes II and above)</li>
              <li>Report cards/mark sheets of the last two years</li>
              <li>Four recent passport-sized photographs of the student</li>
              <li>One family photograph</li>
              <li>Aadhar card of the student (photocopy)</li>
              <li>Residential proof</li>
              <li>Caste certificate (if applicable)</li>
              <li>Medical fitness certificate</li>
            </ul>
            <p className="mt-4 text-sm">
              Note: All original documents must be presented for verification along with photocopies.
            </p>
          </TabsContent>
        </Tabs>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Fee Structure</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="border p-3 text-left">Class</th>
                  <th className="border p-3 text-left">Admission Fee (One-time)</th>
                  <th className="border p-3 text-left">Annual Fee</th>
                  <th className="border p-3 text-left">Quarterly Tuition Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3">Play Group - KG</td>
                  <td className="border p-3">₹5,000</td>
                  <td className="border p-3">₹8,000</td>
                  <td className="border p-3">₹6,000</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3">Classes I - V</td>
                  <td className="border p-3">₹8,000</td>
                  <td className="border p-3">₹10,000</td>
                  <td className="border p-3">₹7,500</td>
                </tr>
                <tr>
                  <td className="border p-3">Classes VI - VIII</td>
                  <td className="border p-3">₹10,000</td>
                  <td className="border p-3">₹12,000</td>
                  <td className="border p-3">₹9,000</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3">Classes IX - X</td>
                  <td className="border p-3">₹12,000</td>
                  <td className="border p-3">₹15,000</td>
                  <td className="border p-3">₹10,500</td>
                </tr>
                <tr>
                  <td className="border p-3">Classes XI - XII (Science)</td>
                  <td className="border p-3">₹15,000</td>
                  <td className="border p-3">₹18,000</td>
                  <td className="border p-3">₹12,000</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3">Classes XI - XII (Commerce)</td>
                  <td className="border p-3">₹15,000</td>
                  <td className="border p-3">₹16,000</td>
                  <td className="border p-3">₹11,000</td>
                </tr>
                <tr>
                  <td className="border p-3">Classes XI - XII (Arts)</td>
                  <td className="border p-3">₹15,000</td>
                  <td className="border p-3">₹15,000</td>
                  <td className="border p-3">₹10,000</td>
                </tr>
                <tr className="bg-muted/50">
                  <td className="border p-3">Classes XI - XII (Agriculture)</td>
                  <td className="border p-3">₹15,000</td>
                  <td className="border p-3">₹17,000</td>
                  <td className="border p-3">₹11,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm">
            Note: Additional fees may apply for transportation, extracurricular activities, and special programs.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>When does the admission process begin?</AccordionTrigger>
              <AccordionContent>
                The admission process for the new academic session typically begins in January. However, admissions to
                other classes may be available throughout the year, subject to seat availability.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is there a school bus facility available?</AccordionTrigger>
              <AccordionContent>
                Yes, the school provides transportation facilities covering major areas of Sikar. The bus fee varies
                depending on the distance from the school.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Are there any scholarships available?</AccordionTrigger>
              <AccordionContent>
                Yes, the school offers merit scholarships to academically outstanding students and need-based financial
                assistance to deserving candidates. Please contact the school office for more details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What is the student-teacher ratio?</AccordionTrigger>
              <AccordionContent>
                We maintain a healthy student-teacher ratio of approximately 25:1 to ensure personalized attention to
                each student.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Can a student transfer from another board?</AccordionTrigger>
              <AccordionContent>
                Yes, students from other boards (CBSE, ICSE, etc.) can transfer to our school. They will need to provide
                all necessary documents and may need to take a bridge course to adapt to the RBSE curriculum.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div id="admission-form">
          <h3 className="text-2xl font-semibold mb-6">Online Admission Form</h3>
          <Card>
            <CardHeader>
              <CardTitle>Student Application Form</CardTitle>
              <CardDescription>Fill out the form below to apply for admission</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="student-name" className="text-sm font-medium">
                      Student's Full Name
                    </label>
                    <input id="student-name" className="w-full p-2 border rounded-md" placeholder="Enter full name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dob" className="text-sm font-medium">
                      Date of Birth
                    </label>
                    <input id="dob" type="date" className="w-full p-2 border rounded-md" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="gender" className="text-sm font-medium">
                      Gender
                    </label>
                    <select id="gender" className="w-full p-2 border rounded-md">
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="class" className="text-sm font-medium">
                      Applying for Class
                    </label>
                    <select id="class" className="w-full p-2 border rounded-md">
                      <option value="">Select Class</option>
                      <option value="playgroup">Play Group</option>
                      <option value="nursery">Nursery</option>
                      <option value="kg">Kindergarten</option>
                      <option value="1">Class I</option>
                      <option value="2">Class II</option>
                      <option value="3">Class III</option>
                      <option value="4">Class IV</option>
                      <option value="5">Class V</option>
                      <option value="6">Class VI</option>
                      <option value="7">Class VII</option>
                      <option value="8">Class VIII</option>
                      <option value="9">Class IX</option>
                      <option value="10">Class X</option>
                      <option value="11-science">Class XI - Science</option>
                      <option value="11-commerce">Class XI - Commerce</option>
                      <option value="11-arts">Class XI - Arts</option>
                      <option value="11-agriculture">Class XI - Agriculture</option>
                      <option value="12-science">Class XII - Science</option>
                      <option value="12-commerce">Class XII - Commerce</option>
                      <option value="12-arts">Class XII - Arts</option>
                      <option value="12-agriculture">Class XII - Agriculture</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="parent-name" className="text-sm font-medium">
                      Parent/Guardian Name
                    </label>
                    <input
                      id="parent-name"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter parent/guardian name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="mobile" className="text-sm font-medium">
                      Mobile Number
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter mobile number"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="address" className="text-sm font-medium">
                      Residential Address
                    </label>
                    <input id="address" className="w-full p-2 border rounded-md" placeholder="Enter address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="previous-school" className="text-sm font-medium">
                    Previous School (if applicable)
                  </label>
                  <input
                    id="previous-school"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter previous school name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-2 border rounded-md"
                    placeholder="Any additional information you would like to share"
                  ></textarea>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button size="lg" className="w-full">
                Submit Application
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Contact Admissions Office</h3>
        <p className="mb-6">For any queries regarding admissions, please contact us:</p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>8432466872, 9460548011, 9414351611</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <span>admissions@sikarvidhyapeeth.com</span>
          </div>
        </div>
        <p>Office Hours: Monday to Saturday, 9:00 AM to 3:00 PM</p>
      </div>
    </div>
  )
}
