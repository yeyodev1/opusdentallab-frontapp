/**
 * Service to handle lead submissions to GoHighLevel (LeadConnector)
 */

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/svfhBtdkhOGZLx03XkoQ/webhook-trigger/4cf5cd2d-6eb5-4593-baab-49fd15e235ab'

export interface LeadFormPayload {
  firstName: string
  lastName: string
  businessName: string
  email: string
  phoneCode: string
  phone: string
  message: string
}

export const leadService = {
  /**
   * Submits contact form data to the GHL Webhook
   * Formats the payload to make it easier to map within GoHighLevel Workflows
   */
  async submitLead(data: LeadFormPayload) {
    try {
      const fullPhoneNumber = `${data.phoneCode} ${data.phone}`

      const payload = {
        // Formatted fields for GoHighLevel standard mapping
        firstName: data.firstName,
        lastName: data.lastName,
        name: `${data.firstName} ${data.lastName}`.trim(),
        email: data.email,
        phone: fullPhoneNumber,

        companyName: data.businessName,     // GHL standard company field
        message: data.message,

        contactSource: 'Website Contact Form', // For opportunity source tracking
        tags: ['web-lead', 'new-opportunity']  // Useful for triggering workflows
      }

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Webhooks might reply with empty body or standard success JSON
      const result = await response.text()
      try {
        return JSON.parse(result)
      } catch (e) {
        return { success: true, text: result }
      }

    } catch (error) {
      console.error('Error submitting lead to webhook:', error)
      throw error // Re-throw to handle in the component
    }
  }
}

