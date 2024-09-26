'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { useRouter } from 'next/navigation';

const QuestionCard = ({ question, options, value, onChange }) => (
  <div>
    <Label className="text-lg font-semibold">{question}</Label>
    <RadioGroup onValueChange={onChange} value={value}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem
            value={option.value}
            id={`${option.value}-${Math.random()}`}
          />
          <Label htmlFor={`${option.value}-${Math.random()}`}>
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </div>
);

const questions = [
  {
    id: 'timeHorizon',
    question: "Quel est votre horizon d'investissement ?",
    options: [
      { value: 'short', label: 'Court terme (1-3 ans)' },
      { value: 'medium', label: 'Moyen terme (3-7 ans)' },
      { value: 'long', label: 'Long terme (plus de 7 ans)' },
    ],
  },
  {
    id: 'riskTolerance',
    question: 'Comment décririez-vous votre tolérance au risque ?',
    options: [
      { value: 'low', label: 'Faible' },
      { value: 'medium', label: 'Moyenne' },
      { value: 'high', label: 'Élevée' },
    ],
  },
  {
    id: 'investmentGoals',
    question: "Quel est votre principal objectif d'investissement ?",
    options: [
      { value: 'preservation', label: 'Préservation du capital' },
      { value: 'income', label: 'Génération de revenus' },
      { value: 'growth', label: 'Croissance à long terme' },
    ],
  },
  {
    id: 'incomeNeeds',
    question: 'Avez-vous besoin de revenus réguliers de vos investissements ?',
    options: [
      { value: 'no', label: 'Non, pas nécessaire' },
      { value: 'some', label: 'Un peu de revenus serait bien' },
      { value: 'yes', label: "Oui, j'ai besoin de revenus réguliers" },
    ],
  },
  {
    id: 'investmentExperience',
    question: "Quelle est votre expérience en matière d'investissement ?",
    options: [
      { value: 'novice', label: 'Débutant' },
      { value: 'intermediate', label: 'Intermédiaire' },
      { value: 'experienced', label: 'Expérimenté' },
    ],
  },
  {
    id: 'financialSituation',
    question: 'Comment décririez-vous votre situation financière actuelle ?',
    options: [
      { value: 'stable', label: 'Stable avec des économies' },
      { value: 'growing', label: 'En croissance avec un bon revenu' },
      { value: 'uncertain', label: 'Incertaine ou fluctuante' },
    ],
  },
];

export default function InvestorProfile() {
  const { toast } = useToast();
  const router = useRouter();
  const [answers, setAnswers] = useState({
    timeHorizon: '',
    riskTolerance: '',
    investmentGoals: '',
    incomeNeeds: '',
    investmentExperience: '',
    financialSituation: '',
  });

  const handleAnswerChange = (question, value) => {
    setAnswers((prev) => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Réponses soumises:', answers);
    toast({
      title: 'Profil évalué',
      description: "Votre profil d'investisseur a été calculé avec succès.",
    });
    router.push('/portfolio-recommendations');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">
            Évaluez votre profil d&apos;investisseur
          </h1>
          <p className="text-xl text-gray-600">
            Répondez à ces questions pour déterminer votre stratégie de
            diversification idéale
          </p>
        </header>

        <Card className="max-w-2xl w-full mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">
              Questionnaire
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {questions.map((q) => (
                <QuestionCard
                  key={q.id}
                  question={q.question}
                  options={q.options}
                  value={answers[q.id]}
                  onChange={(value) => handleAnswerChange(q.id, value)}
                />
              ))}

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Calculer mon profil
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <footer className="mt-12 text-center text-gray-500 pb-4">
        <p>© 2024 InvestSmart. Tous droits réservés.</p>
      </footer>

      <Toaster />
    </div>
  );
}
