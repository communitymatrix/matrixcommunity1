
import MatrixRain from "@/components/MatrixRain";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Index = () => {
  const [showJourney, setShowJourney] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [destination, setDestination] = useState("");
  
  const communityTokens = {
    "MTX": "0x7d1afa7b718fb893db30a3abc0cfc608",
    "NEO": "0x9bc5baf874d2da8d216ae9f137804184",
    "ZION": "0x3f94af5c2a18b5f4c8e76d2c6c371d55"
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio para backend (aqui você adicionaria a integração real futuramente)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Após capturar o email, redireciona para o destino escolhido
      setTimeout(() => {
        window.open(destination, "_blank");
        setShowEmailForm(false);
        setEmail("");
        setSubmitted(false);
      }, 1500);
    }, 1000);
  };

  const handleRedirect = (url: string) => {
    setDestination(url);
    setShowEmailForm(true);
  };

  return (
    <div className="min-h-screen relative">
      <MatrixRain />
      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* SEO Meta Tags seriam adicionados no head do documento */}
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-lg border border-matrix-green/20 animate-fade-in">
          <span className="inline-block text-matrix-green text-sm font-mono mb-2 animate-glow">
            Bem-vindo ao Sistema
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-mono">
            Desperte para a Verdade
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Descubra como a realidade digital realmente funciona. Nossa plataforma revela os segredos por trás do sistema, conectando você ao futuro da tecnologia e te dando as chaves para escapar da Matrix.
          </p>
          
          {!showJourney ? (
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-matrix-green hover:bg-matrix-light text-black font-mono text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                onClick={() => setShowJourney(true)}
              >
                Iniciar Jornada
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-matrix-green font-mono text-xl mb-4 animate-glow">
                Escolha seu Caminho
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 py-6"
                  onClick={() => handleRedirect("https://twitter.com/seu_perfil")}
                >
                  <ArrowRight className="w-5 h-5" />
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 py-6"
                  onClick={() => handleRedirect("https://t.me/seu_canal")}
                >
                  <ArrowRight className="w-5 h-5" />
                  Telegram
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-matrix-green text-matrix-green hover:bg-matrix-green/10 py-6"
                  onClick={() => handleRedirect("https://tiktok.com/@seu_perfil")}
                >
                  <ArrowRight className="w-5 h-5" />
                  TikTok
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

          {/* Formulário de captura de email */}
          {showEmailForm && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
              <div className="bg-black/90 border border-matrix-green/30 p-6 rounded-lg w-full max-w-md">
                {!submitted ? (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <h3 className="text-matrix-green text-xl font-mono mb-2">Antes de continuar</h3>
                    <p className="text-gray-300 text-sm mb-4">
                      Deixe seu email para receber atualizações sobre nossos tokens e futuras integrações.
                    </p>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-matrix-green">Email (opcional)</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-black/50 border-matrix-green/30 text-white"
                      />
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button
                        type="submit"
                        className="flex-1 bg-matrix-green hover:bg-matrix-light text-black font-mono"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-matrix-green/50 text-matrix-green"
                        onClick={() => {
                          window.open(destination, "_blank");
                          setShowEmailForm(false);
                        }}
                      >
                        Pular
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-matrix-green text-xl font-mono mb-3">Obrigado!</p>
                    <p className="text-gray-300">Redirecionando para o site...</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Área para contratos de próximos lançamentos */}
          <div id="tokens" className="mt-12">
            <div className="border border-matrix-green/20 bg-black/50 p-4 rounded-lg">
              <h3 className="text-matrix-green font-mono text-lg mb-3">Contratos para próximos lançamentos</h3>
              <div className="font-mono text-gray-300 bg-black/70 p-3 rounded overflow-x-auto">
                {Object.entries(communityTokens).map(([name, address]) => (
                  <div key={name} className="mb-2">
                    <span className="text-matrix-green mr-2">{name}:</span>
                    <code className="text-white break-all">{address}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nota sobre futura integração com carteiras */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              Em breve: Integração com carteiras de criptomoedas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
