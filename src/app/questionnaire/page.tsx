"use client";

import { useState } from "react";

export default function QuestionnairePage() {
  const [formData, setFormData] = useState({
    clinic_name: "",
    tagline: "",
    description: "",
    address: "",
    phone: "",
    email: "",
    hours_monday: "",
    hours_tuesday: "",
    hours_wednesday: "",
    hours_thursday: "",
    hours_friday: "",
    hours_saturday: "",
    hours_sunday: "",
    years_operating: "",
    patients_treated: "",
    satisfaction_rate: "",
    awards: "",
    memberships: "",
    usp_1: "",
    usp_2: "",
    usp_3: "",
    usp_4: "",
    usp_5: "",
    service_1_name: "",
    service_1_desc: "",
    service_2_name: "",
    service_2_desc: "",
    service_3_name: "",
    service_3_desc: "",
    condition_back_pain: false,
    condition_neck_pain: false,
    condition_headaches: false,
    condition_sports: false,
    condition_joint: false,
    condition_pregnancy: false,
    condition_posture: false,
    condition_chronic: false,
    conditions_other: "",
    pract_1_name: "",
    pract_1_qual: "",
    pract_1_years: "",
    pract_1_photo: "",
    pract_1_special: "",
    pract_1_bio: "",
    pract_2_name: "",
    pract_2_qual: "",
    pract_2_years: "",
    pract_2_photo: "",
    pract_2_special: "",
    pract_2_bio: "",
    pract_3_name: "",
    pract_3_qual: "",
    pract_3_years: "",
    pract_3_photo: "",
    pract_3_special: "",
    pract_3_bio: "",
    has_testimonials: "",
    testimonial_count: "3",
    google_reviews: "",
    testimonial_1: "",
    testimonial_2: "",
    testimonial_3: "",
    mission: "",
    value_1: "",
    value_2: "",
    value_3: "",
    philosophy: "",
    first_visit: "",
    img_clinic_exterior: false,
    img_treatment_room: false,
    img_practitioners: false,
    img_equipment: false,
    img_team: false,
    booking_url: "",
    consult_duration: "",
    followup_duration: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    additional_info: "",
    launch_date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const jsonData = JSON.stringify(formData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "questionnaire_data.json";
    a.click();
    alert("Questionnaire data saved! Please email this file back to us.");
  };

  return (
    <div className="min-h-screen bg-light py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-2">
            Inspire Health Osteo
          </h1>
          <p className="text-lg text-dark/70 mb-8">
            Website Redesign Questionnaire
          </p>
          
          <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-8">
            <p className="text-dark">
              <strong>💡 Instructions:</strong> Please fill out all relevant fields below. 
              When complete, click &quot;Save &amp; Download&quot; at the bottom to download your responses as a JSON file, 
              then email it back to us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Clinic Information */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                1. Clinic Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Full Clinic Name *</label>
                  <input
                    type="text"
                    name="clinic_name"
                    value={formData.clinic_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Preferred Tagline or Motto</label>
                  <input
                    type="text"
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleChange}
                    placeholder="e.g., Relieve Pain. Restore Movement. Reconnect with Your Best Self."
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Short Description (1-2 sentences) *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Full Address *</label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={2}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Operating Hours */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                2. Operating Hours
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                  <div key={day}>
                    <label className="block font-semibold mb-2 capitalize">
                      {day === "sunday" ? "Sunday" : day.charAt(0).toUpperCase() + day.slice(1)}
                    </label>
                    <input
                      type="text"
                      name={`hours_${day}`}
                      value={formData[`hours_${day}` as keyof typeof formData] as string}
                      onChange={handleChange}
                      placeholder={day === "sunday" ? "e.g., Closed" : "e.g., 9:00 AM - 6:00 PM"}
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3: Practice History */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                3. Practice History & Credibility
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Years Operating</label>
                    <input
                      type="number"
                      name="years_operating"
                      value={formData.years_operating}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-semibold mb-2">Patients Treated (if known)</label>
                    <input
                      type="number"
                      name="patients_treated"
                      value={formData.patients_treated}
                      onChange={handleChange}
                      min="0"
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Patient Satisfaction Rate</label>
                  <input
                    type="text"
                    name="satisfaction_rate"
                    value={formData.satisfaction_rate}
                    onChange={handleChange}
                    placeholder="e.g., 98%"
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Awards or Recognitions</label>
                  <textarea
                    name="awards"
                    value={formData.awards}
                    onChange={handleChange}
                    rows={3}
                    placeholder="List any awards, certifications, or recognitions"
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Professional Memberships</label>
                  <textarea
                    name="memberships"
                    value={formData.memberships}
                    onChange={handleChange}
                    rows={2}
                    placeholder="e.g., Australian Osteopathic Association"
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </section>

            {/* Section 4: Unique Selling Points */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                4. What Makes Your Clinic Different?
              </h2>
              
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num}>
                    <label className="block font-semibold mb-2">Point {num}</label>
                    <input
                      type="text"
                      name={`usp_${num}`}
                      value={formData[`usp_${num}` as keyof typeof formData] as string}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Services */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                5. Services Offered
              </h2>
              
              <div className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="bg-light p-4 rounded-xl">
                    <label className="block font-semibold mb-2">Main Service {num}</label>
                    <input
                      type="text"
                      name={`service_${num}_name`}
                      value={formData[`service_${num}_name` as keyof typeof formData] as string}
                      onChange={handleChange}
                      placeholder="Service name"
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <textarea
                      name={`service_${num}_desc`}
                      value={formData[`service_${num}_desc` as keyof typeof formData] as string}
                      onChange={handleChange}
                      placeholder="Brief description"
                      rows={2}
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Conditions */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                6. Conditions Treated
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { key: "condition_back_pain", label: "Back Pain" },
                  { key: "condition_neck_pain", label: "Neck Pain" },
                  { key: "condition_headaches", label: "Headaches" },
                  { key: "condition_sports", label: "Sports Injuries" },
                  { key: "condition_joint", label: "Joint Pain" },
                  { key: "condition_pregnancy", label: "Pregnancy Pain" },
                  { key: "condition_posture", label: "Postural Issues" },
                  { key: "condition_chronic", label: "Chronic Pain" },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name={key}
                      checked={formData[key as keyof typeof formData] as boolean}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
              
              <div>
                <label className="block font-semibold mb-2">Other Conditions</label>
                <textarea
                  name="conditions_other"
                  value={formData.conditions_other}
                  onChange={handleChange}
                  rows={2}
                  className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </section>

            {/* Section 7: Practitioners */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                7. Practitioner Information
              </h2>
              
              <div className="space-y-6">
                {[1, 2, 3].map((num) => (
                  <div key={num} className="bg-light p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                      Practitioner {num}
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block font-semibold mb-2">Full Name</label>
                        <input
                          type="text"
                          name={`pract_${num}_name`}
                          value={formData[`pract_${num}_name` as keyof typeof formData] as string}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-semibold mb-2">Qualifications</label>
                        <input
                          type="text"
                          name={`pract_${num}_qual`}
                          value={formData[`pract_${num}_qual` as keyof typeof formData] as string}
                          onChange={handleChange}
                          placeholder="e.g., B.Ost, M.Ost"
                          className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-semibold mb-2">Years of Experience</label>
                          <input
                            type="number"
                            name={`pract_${num}_years`}
                            value={formData[`pract_${num}_years` as keyof typeof formData] as string}
                            onChange={handleChange}
                            min="0"
                            className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                          />
                        </div>
                        
                        <div>
                          <label className="block font-semibold mb-2">Photo Available?</label>
                          <select
                            name={`pract_${num}_photo`}
                            value={formData[`pract_${num}_photo` as keyof typeof formData] as string}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Select...</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block font-semibold mb-2">Specializations</label>
                        <input
                          type="text"
                          name={`pract_${num}_special`}
                          value={formData[`pract_${num}_special` as keyof typeof formData] as string}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      
                      <div>
                        <label className="block font-semibold mb-2">Brief Bio (2-3 sentences)</label>
                        <textarea
                          name={`pract_${num}_bio`}
                          value={formData[`pract_${num}_bio` as keyof typeof formData] as string}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Testimonials */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                8. Patient Testimonials
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Do you have patient reviews/testimonials?</label>
                  <select
                    name="has_testimonials"
                    value={formData.has_testimonials}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">How many testimonials to feature? (recommended: 3-5)</label>
                  <input
                    type="number"
                    name="testimonial_count"
                    value={formData.testimonial_count}
                    onChange={handleChange}
                    min="0"
                    max="10"
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Google Reviews Link (if available)</label>
                  <input
                    type="url"
                    name="google_reviews"
                    value={formData.google_reviews}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                {[1, 2, 3].map((num) => (
                  <div key={num}>
                    <label className="block font-semibold mb-2">Sample Testimonial {num}</label>
                    <textarea
                      name={`testimonial_${num}`}
                      value={formData[`testimonial_${num}` as keyof typeof formData] as string}
                      onChange={handleChange}
                      placeholder="Patient name, rating, and review text"
                      rows={3}
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Section 9: Philosophy */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                9. Clinic Philosophy & Values
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Mission Statement</label>
                  <textarea
                    name="mission"
                    value={formData.mission}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                {[1, 2, 3].map((num) => (
                  <div key={num}>
                    <label className="block font-semibold mb-2">Core Value {num}</label>
                    <input
                      type="text"
                      name={`value_${num}`}
                      value={formData[`value_${num}` as keyof typeof formData] as string}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                ))}
                
                <div>
                  <label className="block font-semibold mb-2">Treatment Philosophy</label>
                  <textarea
                    name="philosophy"
                    value={formData.philosophy}
                    onChange={handleChange}
                    placeholder="How would you describe your treatment approach?"
                    rows={3}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">What can patients expect during their first visit?</label>
                  <textarea
                    name="first_visit"
                    value={formData.first_visit}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </section>

            {/* Section 10: Images */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                10. Visual Assets Available
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { key: "img_clinic_exterior", label: "Clinic Exterior Photos" },
                  { key: "img_treatment_room", label: "Treatment Room Photos" },
                  { key: "img_practitioners", label: "Practitioner Photos" },
                  { key: "img_equipment", label: "Equipment/Facility Photos" },
                  { key: "img_team", label: "Team Photos" },
                ].map(({ key, label }) => (
                  <label key={key} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name={key}
                      checked={formData[key as keyof typeof formData] as boolean}
                      onChange={handleChange}
                      className="w-5 h-5 text-primary focus:ring-primary"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </section>

            {/* Section 11: Booking */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                11. Booking & Appointments
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Booking System URL</label>
                  <input
                    type="url"
                    name="booking_url"
                    value={formData.booking_url}
                    onChange={handleChange}
                    placeholder="https://inspire-health-osteo.au2.cliniko.com/bookings"
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">New Patient Consultation Duration</label>
                    <input
                      type="text"
                      name="consult_duration"
                      value={formData.consult_duration}
                      onChange={handleChange}
                      placeholder="e.g., 60 minutes"
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-semibold mb-2">Follow-up Appointment Duration</label>
                    <input
                      type="text"
                      name="followup_duration"
                      value={formData.followup_duration}
                      onChange={handleChange}
                      placeholder="e.g., 30 minutes"
                      className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Section 12: Social Media */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                12. Social Media & Online Presence
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Facebook URL</label>
                  <input
                    type="url"
                    name="facebook"
                    value={formData.facebook}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Instagram URL</label>
                  <input
                    type="url"
                    name="instagram"
                    value={formData.instagram}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">LinkedIn URL</label>
                  <input
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </section>

            {/* Section 13: Additional Info */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                13. Additional Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Any other information you&apos;d like to include?</label>
                  <textarea
                    name="additional_info"
                    value={formData.additional_info}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Preferred Launch Date</label>
                  <input
                    type="date"
                    name="launch_date"
                    value={formData.launch_date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-dark/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </section>

            {/* Submit Button */}
            <div className="pt-8 border-t-2 border-primary">
              <button
                type="submit"
                className="w-full bg-primary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-soft"
              >
                Save & Download Responses
              </button>
              <p className="text-center text-dark/70 mt-4 text-sm">
                This will download a JSON file with all your responses. Please email it back to us.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


