
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";

const Index = () => {
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
        </div>
      </div>
    </div>
  );
};

export default Index;
