# DNS Migration Checklist - Wix to GitHub Pages

## Pre-Migration Preparation

- [x] CNAME file exists in `/public/CNAME` with `virtualgenius.com`
- [ ] Site deployed to GitHub Pages successfully
- [ ] Verify GitHub Pages is serving content at `https://virtualgenius.github.io`

## Namecheap DNS Configuration

Go to: https://ap.www.namecheap.com/domains/domaincontrolpanel/virtualgenius.com/advancedns

### 1. Backup Current DNS Records

Before making changes, document ALL current DNS records:
- Take screenshots of current settings
- Note all A records, CNAME records, MX records, TXT records

### 2. Configure GitHub Pages A Records

**Delete:**
- Any existing A records pointing to Wix IP addresses

**Add 4 new A Records (all with Host: `@`, TTL: Automatic):**
- [ ] `185.199.108.153`
- [ ] `185.199.109.153`
- [ ] `185.199.110.153`
- [ ] `185.199.111.153`

### 3. Configure www Subdomain

**Update CNAME record:**
- [ ] Host: `www`
- [ ] Value: `virtualgenius.github.io.` (note the trailing dot)
- [ ] TTL: Automatic

### 4. Preserve Email Configuration

**DO NOT DELETE these records:**
- [ ] Keep all MX records (mail server configuration)
- [ ] Keep all TXT records with SPF, DKIM, DMARC
- [ ] Verify email service records are preserved

### 5. Optional: Create Test Subdomain First

To test before full migration:
- [ ] Add CNAME: Host: `test`, Value: `virtualgenius.github.io.`
- [ ] Update CNAME file in repo to `test.virtualgenius.com`
- [ ] Test at `https://test.virtualgenius.com`
- [ ] Switch CNAME file back to `virtualgenius.com` when ready

## GitHub Repository Settings

1. Go to: https://github.com/virtualgenius/virtualgenius.github.io/settings/pages

2. Verify:
   - [ ] Source: Deploy from `main` branch
   - [ ] Custom domain: `virtualgenius.com` is detected
   - [ ] Wait 10-15 minutes after DNS propagation

3. Enable HTTPS:
   - [ ] Check "Enforce HTTPS" (only after DNS is propagated and cert is issued)

## Verification & Testing

### Immediate Checks (within 15-60 minutes)
- [ ] `dig virtualgenius.com` shows GitHub IPs
- [ ] `dig www.virtualgenius.com` shows CNAME to virtualgenius.github.io
- [ ] `https://virtualgenius.com` loads the new site
- [ ] `https://www.virtualgenius.com` redirects/loads correctly

### Browser Testing
- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iOS Safari, Android Chrome)
- [ ] Test all major pages: Home, Services, Books, About, Blog
- [ ] Test all CTAs and contact email links

### Email Verification
- [ ] Send test email to info@virtualgenius.com
- [ ] Verify email delivery is working normally

### SSL Certificate
- [ ] HTTPS certificate issued (may take up to 24 hours)
- [ ] No certificate warnings in browser
- [ ] All assets loading over HTTPS

## Monitoring Period (24-48 hours)

- [ ] Monitor site uptime
- [ ] Check for any DNS propagation issues globally
- [ ] Verify no broken links or missing assets
- [ ] Monitor email delivery

## Wix Cleanup (After Confirmation)

Only after site is confirmed working for 24-48 hours:
- [ ] Cancel or downgrade Wix hosting subscription
- [ ] Keep any content backups if needed
- [ ] Document any Wix-specific features that were migrated

## Demo Apps Migration (Separate Task)

To be addressed after main site migration:
- [ ] Identify what demo apps exist on current Wix site
- [ ] Determine hosting strategy for each app
- [ ] Update GitHub README files with new URLs
- [ ] Configure additional DNS if needed (subdomains)

## Rollback Plan (If Needed)

If issues arise:
1. Go back to Namecheap Advanced DNS
2. Restore original DNS records from backup/screenshots
3. DNS will revert within 15-60 minutes
4. Keep GitHub Pages deployment intact for retry

## Notes

- DNS propagation typically takes 15-60 minutes but can take up to 48 hours globally
- GitHub Pages automatically handles www redirects after DNS is configured
- HTTPS certificate is automatically issued by GitHub via Let's Encrypt
- Current nameservers: Namecheap BasicDNS (no change needed)
