// src/components/LeadCaptureForm.tsx
import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

const LeadCaptureForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    concern: '',
    goal: '',
    diet: '',
    medicine: '',
    activity: '',
    history: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await addDoc(collection(db, 'leads'), {
        ...formData,
        createdAt: Timestamp.now()
      });
      const message = encodeURIComponent(`Hi! I just took the health quiz on Fitterverse. My goal is: ${formData.goal}. Can I talk to a coach?`);
      window.location.href = `https://wa.me/919876543210?text=${message}`;
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form id="lead-form" onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Start Your Free Health Assessment</h2>

      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full mb-3 p-2 border rounded" />

      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full mb-3 p-2 border rounded" />

      <select name="age" value={formData.age} onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">Select Age Group</option>
        <option value="18-25">18–25</option>
        <option value="26-35">26–35</option>
        <option value="36-50">36–50</option>
        <option value="51+">51+</option>
      </select>

      <select name="gender" value={formData.gender} onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">Gender</option>
        <option value="Female">Female</option>
        <option value="Male">Male</option>
        <option value="Other">Other / Prefer not to say</option>
      </select>

      <select name="concern" value={formData.concern} onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">Main Health Concern</option>
        <option value="PCOS/PCOD">PCOS/PCOD</option>
        <option value="Diabetes">Diabetes</option>
        <option value="Thyroid">Thyroid</option>
        <option value="Obesity">Obesity</option>
        <option value="Stress/Sleep">Stress / Sleep Issues</option>
      </select>

      <input type="text" name="goal" placeholder="Your Primary Wellness Goal" value={formData.goal} onChange={handleChange} required className="w-full mb-3 p-2 border rounded" />

      <select name="diet" value={formData.diet} onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">Your Diet Type</option>
        <option value="Veg">Vegetarian</option>
        <option value="Non-Veg">Non-Vegetarian</option>
        <option value="Mixed">Mixed</option>
      </select>

      <select name="medicine" value={formData.medicine} onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">Are you on any medicines?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

      <select name="activity" value={formData.activity} onChange={handleChange} required className="w-full mb-3 p-2 border rounded">
        <option value="">How active are you?</option>
        <option value="Sedentary">Sedentary</option>
        <option value="Moderately active">Moderately active</option>
        <option value="Very active">Very active</option>
      </select>

      <textarea name="history" value={formData.history} onChange={handleChange} placeholder="Any previous health conditions or diagnoses?" rows={3} className="w-full mb-4 p-2 border rounded" />

      <button type="submit" disabled={submitting} className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition">
        {submitting ? 'Submitting...' : 'Get My Starter Plan'}
      </button>
    </form>
  );
};

export default LeadCaptureForm;
