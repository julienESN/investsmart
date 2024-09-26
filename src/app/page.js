'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';

export default function Home() {
  const { toast } = useToast();

  const handleStartLearning = () => {
    console.log("Commencer le parcours d'apprentissage");
    toast({
      title: 'Parcours démarré',
      description: "Votre parcours d'apprentissage a commencé avec succès.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">InvestSmart</h1>
          <p className="text-xl text-gray-600">
            Maîtrisez l&apos;art de la diversification des investissements
          </p>
        </header>

        <section className="max-w-2xl w-full">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">
                Pourquoi diversifier ?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                La diversification est une stratégie clé en investissement qui
                consiste à répartir vos actifs dans différents types
                d&apos;investissements. Cette approche vise à optimiser les
                rendements tout en minimisant les risques, en s&apos;appuyant
                sur le principe que différents actifs réagissent différemment
                aux mêmes conditions de marché.
              </p>
              <p className="text-gray-700">
                En ne mettant pas tous vos œufs dans le même panier, vous pouvez
                potentiellement réduire l&apos;impact des fluctuations du marché
                sur votre portefeuille global.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700">
                Nos Services
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700">
                <li>Conseils personnalisés en investissement</li>
                <li>Analyse de portefeuille</li>
                <li>Formation et ressources éducatives</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              onClick={handleStartLearning}
            >
              <Link href="/modern-portfolio-theory-intro">
                Commencer votre parcours d&apos;apprentissage
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="mt-12 text-center text-gray-500 pb-4">
        <p>© 2024 InvestSmart. Tous droits réservés.</p>
      </footer>

      <Toaster />
    </div>
  );
}
