'use client';

import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

const mockProfile = {
  riskTolerance: 'medium',
  timeHorizon: 'long',
  investmentGoals: 'growth',
};

const generateRecommendations = (profile) => {
  if (profile.riskTolerance === 'medium' && profile.timeHorizon === 'long') {
    return [
      { name: 'Actions', value: 60, fill: 'hsl(var(--chart-1))' },
      { name: 'Obligations', value: 30, fill: 'hsl(var(--chart-2))' },
      { name: 'Immobilier', value: 5, fill: 'hsl(var(--chart-3))' },
      { name: 'Liquidités', value: 5, fill: 'hsl(var(--chart-4))' },
    ];
  }
  // Ajoutez d'autres cas ici
};

const chartConfig = {
  value: { label: 'Allocation' },
  Actions: { label: 'Actions', color: 'hsl(var(--chart-1))' },
  Obligations: { label: 'Obligations', color: 'hsl(var(--chart-2))' },
  Immobilier: { label: 'Immobilier', color: 'hsl(var(--chart-3))' },
  Liquidités: { label: 'Liquidités', color: 'hsl(var(--chart-4))' },
};

export default function PortfolioRecommendations() {
  const { toast } = useToast();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const loadedRecommendations = generateRecommendations(mockProfile);
    setRecommendations(loadedRecommendations);
    toast({
      title: 'Recommandations générées',
      description: 'Vos recommandations de portefeuille sont prêtes.',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">
            Recommandations de Portefeuille
          </h1>
          <p className="text-xl text-gray-600">
            Basées sur votre profil d&apos;investisseur
          </p>
        </header>

        <Card className="max-w-4xl w-full mb-6">
          <CardHeader className="items-center pb-0">
            <CardTitle>Allocation d&apos;actifs recommandée</CardTitle>
            <CardDescription>
              Basée sur votre profil d&apos;investisseur
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[400px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Pie
                  data={recommendations}
                  dataKey="value"
                  nameKey="name"
                  stroke="0"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
            <div className="flex items-center gap-2 font-medium leading-none">
              Portefeuille optimisé pour votre profil{' '}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Allocation basée sur vos objectifs et votre tolérance au risque
            </div>
          </CardFooter>
        </Card>

        <Card className="max-w-4xl w-full mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">
              Explication de la recommandation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Basé sur votre profil d&apos;investisseur à risque moyen et votre
              horizon d&apos;investissement à long terme, nous recommandons une
              allocation d&apos;actifs diversifiée qui équilibre croissance et
              stabilité.
            </p>
            <ul className="list-disc list-inside text-gray-700">
              <li>60% en actions pour la croissance à long terme</li>
              <li>30% en obligations pour la stabilité et le revenu</li>
              <li>5% en immobilier pour la diversification</li>
              <li>5% en liquidités pour les opportunités et la sécurité</li>
            </ul>
          </CardContent>
        </Card>

        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() =>
            toast({
              title: 'Félicitations !',
              description:
                "Vous êtes sur la bonne voie pour une stratégie d'investissement diversifiée.",
            })
          }
        >
          Adopter cette stratégie
        </Button>
      </main>

      <footer className="mt-12 text-center text-gray-500 pb-4">
        <p>© 2024 InvestSmart. Tous droits réservés.</p>
      </footer>

      <Toaster />
    </div>
  );
}
