import { useState, forwardRef } from 'react';
import { Wallet, Plus, Trash2, Zap, Globe, WalletMinimal, CheckCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { OverlayScrollbar } from '@/components/OverlayScrollbar';
import { useNWC } from '@/hooks/useNWCContext';
import { useWallet } from '@/hooks/useWallet';
import { useToast } from '@/hooks/useToast';
import { useIsMobile } from '@/hooks/useIsMobile';
import { useRTL } from '@/hooks/useRTL';
import { cn } from '@/lib/utils';
import type { NWCConnection, NWCInfo } from '@/hooks/useNWC';
import type { WebLNProvider } from "@webbtc/webln-types";

interface WalletModalProps {
  children?: React.ReactNode;
  className?: string;
}

// Extracted AddWalletContent to prevent re-renders
const AddWalletContent = forwardRef<HTMLDivElement, {
  alias: string;
  setAlias: (value: string) => void;
  connectionUri: string;
  setConnectionUri: (value: string) => void;
}>(({ alias, setAlias, connectionUri, setConnectionUri }, ref) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-4 px-4" ref={ref}>
      <div>
        <Label htmlFor="alias">{t('wallet.wallet_name')}</Label>
        <Input
          id="alias"
          placeholder={t('wallet.wallet_name_placeholder')}
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="connection-uri">{t('wallet.connection_uri')}</Label>
        <Textarea
          id="connection-uri"
          placeholder={t('wallet.connection_uri_placeholder')}
          value={connectionUri}
          onChange={(e) => setConnectionUri(e.target.value)}
          rows={3}
        />
      </div>
    </div>
  );
});
AddWalletContent.displayName = 'AddWalletContent';

// Extracted WalletContent to prevent re-renders
const WalletContent = forwardRef<HTMLDivElement, {
  webln: WebLNProvider | null;
  hasNWC: boolean;
  connections: NWCConnection[];
  connectionInfo: Record<string, NWCInfo>;
  activeConnection: string | null;
  handleSetActive: (cs: string) => void;
  handleRemoveConnection: (cs: string) => void;
  setAddDialogOpen: (open: boolean) => void;
}>(({
  webln,
  hasNWC,
  connections,
  connectionInfo,
  activeConnection,
  handleSetActive,
  handleRemoveConnection,
  setAddDialogOpen
}, ref) => {
  const { t } = useTranslation();
  const { isRTL } = useRTL();
  
  return (
    <div className="space-y-6 px-4 pb-4" ref={ref}>
      {/* Current Status */}
      <div className="space-y-3">
        <h3 className="font-medium">{t('wallet.current_status')}</h3>
        <div className="grid gap-3">
          {/* WebLN */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{t('wallet.webln')}</p>
                <p className="text-xs text-muted-foreground">{t('wallet.webln_description')}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {webln && <CheckCircle className="h-4 w-4 text-green-600" />}
              <Badge variant={webln ? "default" : "secondary"} className="text-xs">
                {webln ? t('wallet.ready') : t('wallet.not_found')}
              </Badge>
            </div>
          </div>
          {/* NWC */}
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center gap-3">
              <WalletMinimal className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{t('wallet.nwc')}</p>
                <p className="text-xs text-muted-foreground">
                  {connections.length > 0
                    ? t('wallet.nwc_connected', { count: connections.length, plural: connections.length !== 1 ? 's' : '' })
                    : t('wallet.nwc_description')
                  }
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {hasNWC && <CheckCircle className="h-4 w-4 text-green-600" />}
              <Badge variant={hasNWC ? "default" : "secondary"} className="text-xs">
                {hasNWC ? t('wallet.ready') : t('wallet.none')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
      <Separator />
      {/* NWC Management */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{t('wallet.nwc')}</h3>
          <Button size="sm" variant="outline" onClick={() => setAddDialogOpen(true)}>
            <Plus className={cn("h-4 w-4", isRTL ? "ml-1" : "mr-1")} />
            {t('wallet.add')}
          </Button>
        </div>
        {/* Connected Wallets List */}
        {connections.length === 0 ? (
          <div className="text-center py-6 text-muted-foreground">
            <p className="text-sm">{t('wallet.no_wallets')}</p>
          </div>
        ) : (
          <div className="space-y-2">
            {connections.map((connection) => {
              const info = connectionInfo[connection.connectionString];
              const isActive = activeConnection === connection.connectionString;
              return (
                <div key={connection.connectionString} className={`flex items-center justify-between p-3 border rounded-lg ${isActive ? 'ring-2 ring-primary' : ''}`}>
                  <div className="flex items-center gap-3">
                    <WalletMinimal className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">
                        {connection.alias || info?.alias || t('wallet.lightning_wallet_name')}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t('wallet.nwc_connection')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isActive && <CheckCircle className="h-4 w-4 text-green-600" />}
                    {!isActive && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleSetActive(connection.connectionString)}
                      >
                        <Zap className="h-3 w-3" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveConnection(connection.connectionString)}
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Help */}
      {!webln && connections.length === 0 && (
        <>
          <Separator />
          <div className="text-center py-4 space-y-2">
            <p className="text-sm text-muted-foreground">
              {t('wallet.help_text')}
            </p>
          </div>
        </>
      )}
    </div>
  );
});
WalletContent.displayName = 'WalletContent';

export function WalletModal({ children, className }: WalletModalProps) {
  const [open, setOpen] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [connectionUri, setConnectionUri] = useState('');
  const [alias, setAlias] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { isRTL } = useRTL();

  const {
    connections,
    activeConnection,
    connectionInfo,
    addConnection,
    removeConnection,
    setActiveConnection
  } = useNWC();

  const { webln } = useWallet();

  const hasNWC = connections.length > 0 && connections.some(c => c.isConnected);
  const { toast } = useToast();

  const handleAddConnection = async () => {
    if (!connectionUri.trim()) {
      toast({
        title: t('wallet.connection_required'),
        description: t('wallet.connection_required_desc'),
        variant: 'destructive',
      });
      return;
    }

    setIsConnecting(true);
    try {
      const success = await addConnection(connectionUri.trim(), alias.trim() || undefined);
      if (success) {
        setConnectionUri('');
        setAlias('');
        setAddDialogOpen(false);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  const handleRemoveConnection = (connectionString: string) => {
    removeConnection(connectionString);
  };

  const handleSetActive = (connectionString: string) => {
    setActiveConnection(connectionString);
    toast({
      title: t('wallet.active_wallet_changed'),
      description: t('wallet.active_wallet_changed_desc'),
    });
  };

  const walletContentProps = {
    webln,
    hasNWC,
    connections,
    connectionInfo,
    activeConnection,
    handleSetActive,
    handleRemoveConnection,
    setAddDialogOpen,
  };

  const addWalletDialog = (
    <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('wallet.connect_nwc')}</DialogTitle>
          <DialogDescription>
            {t('wallet.connect_description_detailed')}
          </DialogDescription>
        </DialogHeader>
        <AddWalletContent
          alias={alias}
          setAlias={setAlias}
          connectionUri={connectionUri}
          setConnectionUri={setConnectionUri}
        />
        <DialogFooter className="px-4">
          <Button
            onClick={handleAddConnection}
            disabled={isConnecting || !connectionUri.trim()}
            className="w-full"
          >
            {isConnecting ? t('wallet.connecting') : t('wallet.connect')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  if (isMobile) {
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            {children || (
              <Button variant="outline" size="sm" className={className}>
                <Wallet className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
                {t('wallet.wallet_settings')}
              </Button>
            )}
          </DrawerTrigger>
          <DrawerContent className="h-full">
            <DrawerHeader className="text-center relative">
              <DrawerClose asChild>
                <Button variant="ghost" size="sm" className={cn("absolute top-4", isRTL ? "left-4" : "right-4")}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">{t('wallet.close')}</span>
                </Button>
              </DrawerClose>
              <DrawerTitle className="flex items-center justify-center gap-2 pt-2">
                <Wallet className="h-5 w-5" />
                {t('wallet.lightning_wallet')}
              </DrawerTitle>
              <DrawerDescription>
                {t('wallet.connect_description')}
              </DrawerDescription>
            </DrawerHeader>
            <OverlayScrollbar>
              <WalletContent {...walletContentProps} />
            </OverlayScrollbar>
          </DrawerContent>
        </Drawer>
        {/* Render Add Wallet as a separate Drawer for mobile */}
        <Drawer open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t('wallet.connect_nwc')}</DrawerTitle>
              <DrawerDescription>
                {t('wallet.connect_description_detailed')}
              </DrawerDescription>
            </DrawerHeader>
            <AddWalletContent
              alias={alias}
              setAlias={setAlias}
              connectionUri={connectionUri}
              setConnectionUri={setConnectionUri}
            />
            <div className="p-4">
              <Button
                onClick={handleAddConnection}
                disabled={isConnecting || !connectionUri.trim()}
                className="w-full"
              >
                {isConnecting ? t('wallet.connecting') : t('wallet.connect')}
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {children || (
            <Button variant="outline" size="sm" className={className}>
              <Wallet className={cn("h-4 w-4", isRTL ? "ml-2" : "mr-2")} />
              {t('wallet.wallet_settings')}
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-h-[80vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              {t('wallet.lightning_wallet')}
            </DialogTitle>
            <DialogDescription>
              {t('wallet.connect_description')}
            </DialogDescription>
          </DialogHeader>
          <OverlayScrollbar className="flex-1">
            <WalletContent {...walletContentProps} />
          </OverlayScrollbar>
        </DialogContent>
      </Dialog>
      {addWalletDialog}
    </>
  );
}