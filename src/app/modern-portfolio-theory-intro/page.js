'use client';

import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ModernPortfolioTheoryIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">
            Introduction à la Théorie Moderne du Portefeuille
          </h1>
          <p className="text-xl text-gray-600">
            Comprendre les bases avant d'évaluer votre profil d'investisseur
          </p>
        </header>

        <Card className="max-w-3xl w-full mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-700">
              Qu'est-ce que la Théorie Moderne du Portefeuille?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              La Théorie Moderne du Portefeuille (MPT), développée par Harry
              Markowitz en 1952, est un cadre pour construire un portefeuille
              d'investissement qui maximise les rendements attendus pour un
              niveau de risque donné.
            </p>
            <h3 className="text-lg font-semibold">Principes clés :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Diversification : Répartir les investissements pour réduire le
                risque
              </li>
              <li>
                Relation risque-rendement : Plus de risque peut apporter plus de
                rendement
              </li>
              <li>
                Frontière efficiente : Ensemble de portefeuilles offrant le
                meilleur rendement pour chaque niveau de risque
              </li>
              <li>
                Allocation d'actifs : Répartition des investissements entre
                différentes classes d'actifs
              </li>
            </ul>
            <p>
              Comprendre ces concepts vous aidera à mieux évaluer votre profil
              d'investisseur et à prendre des décisions éclairées pour votre
              stratégie d'investissement.
            </p>
          </CardContent>
        </Card>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/investor-profile">
            Commencer l'évaluation de mon profil
          </Link>
        </Button>
      </main>

      <footer className="mt-12 text-center text-gray-500 pb-4">
        <p>© 2024 InvestSmart. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
