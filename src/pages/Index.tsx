
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";

const Index = () => {
  const communityTokens = {
    "MTX": "0x7d1afa7b718fb893db30a3abc0cfc608",
    "NEO": "0x9bc5baf874d2da8d216ae9f137804184",
    "ZION": "0x3f94af5c2a18b5f4c8e76d2c6c371d55"
  };

  return (
    <div className="min-h-screen relative">
      <MatrixRain />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md p-8 rounded-lg border border-matrix-green/20 animate-fade-in">
          <span className="inline-block text-matrix-green text-sm font-mono mb-2 animate-glow">
            Bem-vindo ao Sistema
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono">
            Entre na Matrix
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Descubra um novo nível de realidade digital. Nossa plataforma oferece uma
            experiência única e imersiva, conectando você ao futuro da tecnologia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-matrix-green hover:bg-matrix-light text-black font-mono text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              Iniciar Jornada
            </Button>
            <Button
              variant="outline"
              className="border-matrix-green text-matrix-green hover:bg-matrix-green/10 font-mono text-lg px-8 py-6"
            >
              Saiba Mais
            </Button>
          </div>

          {/* Seção de Tokens */}
          <div className="mt-12 p-6 bg-black/50 rounded-lg border border-matrix-green/30">
            <h2 className="text-matrix-green font-mono text-xl mb-4 animate-glow">
              Tokens da Comunidade
            </h2>
            <div className="space-y-3">
              {Object.entries(communityTokens).map(([name, address]) => (
                <div key={name} className="flex items-center justify-between p-3 bg-black/30 rounded border border-matrix-green/20">
                  <span className="text-white font-mono">{name}</span>
                  <span className="text-matrix-green font-mono text-sm">{address}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Botões de Redes Sociais */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="flex items-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10"
              onClick={() => window.open("https://example.com/link1", "_blank")}
            >
              <ArrowRight className="w-5 h-5" />
              Link 1
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10"
              onClick={() => window.open("https://example.com/link2", "_blank")}
            >
              <ChevronRight className="w-5 h-5" />
              Link 2
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
