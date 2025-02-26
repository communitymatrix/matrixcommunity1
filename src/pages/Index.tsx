
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showJourney, setShowJourney] = useState(false);
  
  const communityTokens = {
    "MTX": "0x7d1afa7b718fb893db30a3abc0cfc608",
    "NEO": "0x9bc5baf874d2da8d216ae9f137804184",
    "ZION": "0x3f94af5c2a18b5f4c8e76d2c6c371d55"
  };

  return (
    <div className="min-h-screen relative">
      <MatrixRain />
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-lg border border-matrix-green/20 animate-fade-in">
          <span className="inline-block text-matrix-green text-sm font-mono mb-2 animate-glow">
            Bem-vindo ao Sistema
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono">
            Entre na Matrix
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Descubra um novo nível de realidade digital. Nossa plataforma oferece uma
            experiência única e imersiva, conectando você ao futuro da tecnologia.
          </p>
          
          {!showJourney ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-matrix-green hover:bg-matrix-light text-black font-mono text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                onClick={() => setShowJourney(true)}
              >
                Iniciar Jornada
              </Button>
              <Button
                variant="outline"
                className="border-matrix-green text-matrix-green hover:bg-matrix-green/10 font-mono text-lg px-8 py-6"
                onClick={() => window.open("#tokens", "_self")}
              >
                Ver Tokens
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-matrix-green font-mono text-xl mb-4 animate-glow">
                Escolha seu Caminho
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 py-6"
                  onClick={() => window.open("https://twitter.com/seu_perfil", "_blank")}
                >
                  <ArrowRight className="w-5 h-5" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 flex items-center justify-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 py-6"
                  onClick={() => window.open("https://seu_site.com", "_blank")}
                >
                  <ChevronRight className="w-5 h-5" />
                  Site Oficial
                </Button>
              </div>
              
              <div className="pt-4">
                <Button
                  variant="ghost"
                  className="text-matrix-green hover:text-matrix-green/80"
                  onClick={() => setShowJourney(false)}
                >
                  Voltar
                </Button>
              </div>
            </div>
          )}

          {/* Seção de Tokens - Link Único */}
          <div id="tokens" className="mt-12">
            <Button
              variant="outline"
              className="w-full border-matrix-green text-matrix-green hover:bg-matrix-green/10 font-mono py-4"
              onClick={() => window.open("https://etherscan.io/tokens", "_blank")}
            >
              Ver Todos os Tokens da Comunidade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
