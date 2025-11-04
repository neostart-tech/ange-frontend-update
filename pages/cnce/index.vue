<template>
    <AngeRoot>
        <AngeBreadcrumb activePageName="Régions" backgroundUrl="/images/bg/bg-ange-03.jpg" :others="[
            { title: 'Accueil', url: '/' },
            { title: 'Acteur', url: '#' },
            { title: 'CNCE', url: '/cnce' }
        ]" />
        <AngeRegion />
    </AngeRoot>
</template>
